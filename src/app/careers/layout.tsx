import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join HAN Solutions LLC. Explore open positions in software development, QA engineering, DevOps, and more. Remote-first culture with competitive compensation.",
  openGraph: {
    title: "Careers · Han Solutions",
    description:
      "Build your career with Han. Remote-first, competitive compensation, cutting-edge technology.",
  },
  alternates: {
    canonical: "https://www.hansolutions.com/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
