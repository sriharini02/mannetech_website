import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const INK = "#0B2545";
const GOLD = "#F4B942";

function wrapTemplate(title: string, content: string) {
  return `
    <div style="font-family: -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0F1419;">
      <div style="border-bottom: 4px solid ${GOLD}; padding-bottom: 12px; margin-bottom: 20px;">
        <p style="margin: 0; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: ${INK};">Han Solutions</p>
        <h2 style="margin: 8px 0 0; color: ${INK}; font-weight: 500; font-size: 24px;">${title}</h2>
      </div>
      ${content}
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E3DCCB; font-size: 11px; color: #5A6677;">
        <p style="margin: 0;">This message was sent via hansolutions.com</p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Missing required fields: type, data" },
        { status: 400 }
      );
    }

    let subject = "";
    let html = "";

    switch (type) {
      case "contact": {
        const { name, email, phone, message } = data;
        if (!name || !email || !message) {
          return NextResponse.json({ error: "Missing required contact fields" }, { status: 400 });
        }
        subject = `New contact inquiry — ${name}`;
        html = wrapTemplate(
          "New contact form submission",
          `
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #5A6677; width: 120px;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: ${INK};">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #5A6677;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #FBF6EB; border-left: 3px solid ${GOLD};">
            <strong style="color: ${INK};">Message:</strong>
            <p style="color: #0F1419; margin: 10px 0 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
          `
        );
        break;
      }

      case "appointment": {
        const { firstName, lastName, email, notes, date, time } = data;
        if (!firstName || !lastName || !email || !date || !time) {
          return NextResponse.json({ error: "Missing required appointment fields" }, { status: 400 });
        }
        subject = `New appointment request — ${firstName} ${lastName}`;
        html = wrapTemplate(
          "New appointment request",
          `
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #5A6677; width: 120px;"><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: ${INK};">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Date:</strong></td><td style="font-weight: 600; color: ${INK};">${date}</td></tr>
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Time:</strong></td><td style="font-weight: 600; color: ${INK};">${time}</td></tr>
          </table>
          ${notes ? `
          <div style="margin-top: 20px; padding: 16px; background: #FBF6EB; border-left: 3px solid ${GOLD};">
            <strong style="color: ${INK};">Notes:</strong>
            <p style="color: #0F1419; margin: 10px 0 0; white-space: pre-wrap; line-height: 1.5;">${notes}</p>
          </div>` : ""}
          `
        );
        break;
      }

      case "application": {
        const { firstName, lastName, email, phone, position, summary } = data;
        if (!firstName || !lastName || !email || !position || !summary) {
          return NextResponse.json({ error: "Missing required application fields" }, { status: 400 });
        }
        subject = `New application: ${position} — ${firstName} ${lastName}`;
        html = wrapTemplate(
          "New job application",
          `
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #5A6677; width: 120px;"><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: ${INK};">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #5A6677;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Position:</strong></td><td style="font-weight: 600; color: ${INK};">${position}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #FBF6EB; border-left: 3px solid ${GOLD};">
            <strong style="color: ${INK};">Summary / Cover letter:</strong>
            <p style="color: #0F1419; margin: 10px 0 0; white-space: pre-wrap; line-height: 1.5;">${summary}</p>
          </div>
          `
        );
        break;
      }

      default:
        return NextResponse.json({ error: `Unknown email type: ${type}` }, { status: 400 });
    }

    // If SMTP not configured, return success in dev (no crash)
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[send-email] SMTP not configured — skipping actual send. Set env vars to enable.");
      console.log({ subject, recipient: process.env.CONTACT_TO || "unset" });
      return NextResponse.json({ success: true, dev: true });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject,
      html,
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
