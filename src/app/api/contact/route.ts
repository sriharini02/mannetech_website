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

const BRAND_PRIMARY = "#0E3B4A";
const BRAND_ACCENT = "#4E7A88";

function wrapTemplate(content: string) {
  return `
    <div style="font-family: -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0F1419;">
      <div style="border-bottom: 4px solid ${BRAND_ACCENT}; padding-bottom: 12px; margin-bottom: 20px;">
        <p style="margin: 0; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: ${BRAND_PRIMARY};">Manne Technologies</p>
        <h2 style="margin: 8px 0 0; color: ${BRAND_PRIMARY}; font-weight: 500; font-size: 24px;">New Website Enquiry</h2>
      </div>
      ${content}
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E3DCCB; font-size: 11px; color: #5A6677;">
        
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const subject = `New Website Enquiry - ${name}`;
    const html = wrapTemplate(`
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #5A6677; width: 120px;"><strong>Name:</strong></td><td>${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: ${BRAND_PRIMARY};">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #5A6677;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #5A6677;"><strong>Message:</strong></td><td style="white-space: pre-wrap; line-height: 1.5;">${message}</td></tr>
      </table>
      <div style="margin-top: 20px; padding: 12px 0; border-top: 1px solid #E3DCCB; font-size: 12px; color: #5A6677;">
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CST</p>
        <p><strong>Source Website:</strong> mannetechnologies.com</p>
      </div>
    `);

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[contact] SMTP not configured — skipping send.");
      return NextResponse.json({ success: true, dev: true });
    }
    console.log("CONTACT_TO:", process.env.CONTACT_TO);
console.log("CONTACT_CC:", process.env.CONTACT_CC);
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      cc: process.env.CONTACT_CC,
      subject,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
