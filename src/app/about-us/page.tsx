import MainLayout from "@/components/organisms/MainLayout";
import AboutUs from "@/components/molecules/AboutUs";
import { Metadata } from "next";
import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
};

export default AboutUsPage;
