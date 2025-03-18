"use client";

import { Metadata } from "next";
import { useEffect, useState } from "react";

type Props = {
  func: () => Promise<Metadata>;
};

const DEFAULT_METADATA: Metadata = {
  title: "Circle - Best Products and Services",
  description:
    "Discover the best products and services at Circle. Join us today for exclusive offers and insights.",
  keywords: ["best products", "best services", "circle"],
};

const ClientMetadata = ({ func }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [metadata, setMetadata] = useState<Metadata | null>(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    func().then((metadata) => {
      setMetadata(metadata);
    });
  }, [mounted, func]);

  if (!metadata) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  const metaTitle = metadata?.title || DEFAULT_METADATA.title;
  const metaDescription = metadata?.description || DEFAULT_METADATA.description;
  const metaKeywords = metadata?.keywords || DEFAULT_METADATA.keywords;

  return (
    <html lang="en">
      <head>
        <title>{metaTitle as string}</title>
        <meta name="description" content={metaDescription as string} />
        <meta name="keywords" content={metaKeywords as string} />
        <link
          rel="canonical"
          href={metadata?.alternates?.canonical as string}
        />
      </head>
    </html>
  );
};

export default ClientMetadata;
