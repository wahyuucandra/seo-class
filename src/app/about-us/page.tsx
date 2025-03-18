import MainLayout from "@/components/organisms/MainLayout";
import AboutUs from "@/components/molecules/AboutUs";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and our achievements.",
};

const AboutUsPage = (props: Props) => {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
};

export default AboutUsPage;
