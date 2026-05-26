import companyData from "@/data/company.json";
import navData from "@/data/navigation.json";
import servicesData from "@/data/services.json";
import industriesData from "@/data/industries.json";
import productsData from "@/data/products.json";
import testimonialsData from "@/data/testimonials.json";
import statsData from "@/data/stats.json";
import principlesData from "@/data/principles.json";
import partnersData from "@/data/partners.json";
import jobsData from "@/data/jobs.json";
import staffingData from "@/data/staffing.json";
import faqData from "@/data/faq.json";
import imagesData from "@/data/images.json";
import pagesData from "@/data/pages.json";
import caseStudiesData from "@/data/case-studies.json";

export const COMPANY = companyData;
export const NAV_LINKS = navData;
export const SERVICES = servicesData;
export const INDUSTRIES = industriesData;
export const PRODUCTS = productsData;
export const TESTIMONIALS = testimonialsData;
export const STATS = statsData;
export const PRINCIPLES = principlesData;
export const PARTNERS = partnersData;
export const JOBS = jobsData;
export const STAFFING_SERVICES = staffingData;
export const FAQ = faqData;
export const PAGE_IMAGES = imagesData;
export const PAGES = pagesData;
export const CASE_STUDIES = caseStudiesData;

export const CAPABILITIES = pagesData.home.capabilities;

export const SERVICE_IMAGES: Record<string, string> = {
  "it-services": imagesData.hero,
  "software-development": imagesData.hero,
  "sap-solutions": imagesData.sap,
  "digital-transformation": imagesData.digitalTransformation,
  "cloud-services": imagesData.cloud,
  "ai-automation": imagesData.ai,
  "cybersecurity": imagesData.cybersecurity,
  "managed-services": imagesData.hero,
  "product-development": imagesData.products,
  "it-staffing": imagesData.staffingTalent,
};

export const SITE_CONFIG = {
  name: "Manne Technologies",
  shortName: "ManneTech",
  baseUrl: "https://www.mannetechnologies.com",
};
