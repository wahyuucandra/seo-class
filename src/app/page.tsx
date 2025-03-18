import MainLayout from "@/components/organisms/MainLayout";
import { envClient } from "@/helpers/environments/env";
import Home from "@/components/molecules/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: envClient.SITE_URL,
  },
};

export const dynamic = "force-dynamic";
// export const revalidate = 10;

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
