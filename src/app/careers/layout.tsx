import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Manne Technologies | Join Our Global Team",
  description:
    "Explore career opportunities at Manne Technologies. Join 500+ technology professionals delivering enterprise-scale solutions in consulting, engineering, AI, cloud, cybersecurity, and SAP.",
  openGraph: {
    title: "Careers · Manne Technologies",
    description:
      "Join Manne Technologies — a global technology consulting firm. Remote-first, competitive compensation, cutting-edge enterprise projects.",
  },
  alternates: {
    canonical: "https://www.mannetechnologies.com/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
