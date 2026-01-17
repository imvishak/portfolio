import { Cardo } from "next/font/google";
import { Pacifico } from "next/font/google";
import Structured from "./components/structured";
import GaTag from "./components/ga";
import "./globals.css";

const cardo = Cardo({
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-cardo",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: ["400"],
  display: "swap",
  style: ["normal"],
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "imvishak",
    description:
      "Stecome is a Qatar-based engineering contracting W.L.L that designs, installs, & maintains Fire Protection systems, ELV systems, HDG Steel Water Tanks & Fire Suppression Systems",
    keywords:
      "Fire & Safety,Fire & Safety Equipments, Fire & Safety Tools, procurement, engineering, construction, maintenance , commissioning, fire protection systems,ELV systems,extra low voltage system,HDG Steel water tank,fire suppression system, hot dip galvanized steel water tank,cctv system,Fire Alarm System,Voice Evacuation & Emergency Communications Systems,Emergency and Exit Lights,Sprinkler System,Fire suppression Systems,Kitchen Hood Suppression Systems",
    themeColor: "#17538C",
    alternates: {
      canonical: `${process.env.PUBLIC_DOMAIN_URL}`,
    },
    openGraph: {
      title: "imvishak",
      description:
        "Stecome is a Qatar-based engineering contracting W.L.L that designs, installs, & maintains Fire Protection systems, ELV systems, HDG Steel Water Tanks & Fire Suppression Systems",
      publishedTime: new Date(),
      images: [
        `${process.env.PUBLIC_DOMAIN_URL}/assets/images/logo/stecome-logo.png`,
      ],
      type: "website",
      url: `${process.env.PUBLIC_DOMAIN_URL}`,
      siteName: "stecome.com",
    },
    twitter: {
      card: "summary_large_image",
      title: "imvishak",
      description:
        "Stecome is a Qatar-based engineering contracting W.L.L that designs, installs, & maintains Fire Protection systems, ELV systems, HDG Steel Water Tanks & Fire Suppression Systems",
      images: [
        `${process.env.PUBLIC_DOMAIN_URL}/assets/images/logo/stecome-logo.png`,
      ],
    },
    icons: {
      icon: [
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon-16x16.png`,
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon-32X32.png`,
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-icon-192x192.png`,
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-chrome-512x512.png`,
          sizes: "512x512",
          type: "image/png",
        },
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon.ico`,
          sizes: "96x96",
          type: "image/x-icon",
        },
      ],
      shortcut: [
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-icon-192x192.png`,
          sizes: "192x192",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-chrome-512x512.png`,
          sizes: "512x512",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-180x180.png`,
        },
      ],
    },
  };
}

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Stecome",
  url: `${process.env.PUBLIC_DOMAIN_URL}`,
  logo: `${process.env.PUBLIC_DOMAIN_URL}/assets/images/logo/stecome-logo.png`, // URL to your logo image
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+97450869991",
    contactType: "Customer Service",
    areaServed: "Qatar",
    availableLanguage: ["English"],
  },
  sameAs: ["https://www.linkedin.com/company/stecome"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "imvishak",
    addressLocality:
      "Office No: B-244,Building 299, Zone 56/ Street 340,CR : 112993",
    addressRegion: "Doha",
    postalCode: "45389",
    addressCountry: "Qatar",
  },
  description:
    "Stecome is a Qatar-based engineering contracting W.L.L that designs, installs, & maintains Fire Protection systems, ELV systems, HDG Steel Water Tanks & Fire Suppression Systems",
  departments: [
    {
      "@type": "Organization",
      name: "Services",
      url: `${process.env.PUBLIC_DOMAIN_URL}/service`,
    },
    {
      "@type": "Organization",
      name: "System",
      url: `${process.env.PUBLIC_DOMAIN_URL}/system`,
    },
    {
      "@type": "Organization",
      name: "Products",
      url: `${process.env.PUBLIC_DOMAIN_URL}/product`,
    },
    {
      "@type": "Organization",
      name: "Projects",
      url: `${process.env.PUBLIC_DOMAIN_URL}/project`,
    },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${process.env.PUBLIC_DOMAIN_URL}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${cardo.variable} ${pacifico.variable}`} lang="en">
      <body className="container main-container bg-black mx-auto max-w-screen-xl overflow-x-hidden">
        {children}
        <Structured data={structuredData} />
        <GaTag />
      </body>
    </html>
  );
}
