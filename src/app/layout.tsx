import RQProvider from "@/components/organisms/RQProvider";
import { envClient } from "@/utils/environments";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import StructuredData from "@/components/atoms/StructuredData";
import { organizationSchema } from "@/schema/organization";
import CustomGTM from "@/components/atoms/CustomGTM";
import CustomGA from "@/components/atoms/CustomGA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circle - Best Products and Services",
  description:
    "Discover the best products and services at Circle. Join us today for exclusive offers and insights.",
  keywords: ["best products", "best services", "circle"],
  icons: "/favicon.ico",
  robots: {
    index: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    follow: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    googleBot: {
      index: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
      follow: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    },
  },
  other: {
    "Adsbot-Google": `${envClient.NEXT_PUBLIC_ENVIRONMENT === "production"
      ? "index, follow"
      : "noindex, nofollow"
    }`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <CustomGTM containerId={envClient.GTM_ID as string} />
        <CustomGA containerId={envClient.GA_ID as string} />
        <StructuredData id="organization-schema" data={organizationSchema} />
      </head>
      <body className={inter.className}>
        <NextTopLoader />
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}


