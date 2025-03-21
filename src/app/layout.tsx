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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}


