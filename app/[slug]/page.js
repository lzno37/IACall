import React from "react";
import { notFound } from "next/navigation";
import pagesData from "@/data/Pages.json";
import IndutriesTemplate from "@/components/IndutriesTemplate";

export async function generateStaticParams() {
  const industries = pagesData.map((item) => {
    const industryKey = Object.keys(item)[0];
    return {
      slug: industryKey.toLowerCase(),
    };
  });

  return industries;
}

export function generateMetadata({ params }) {
  const { slug } = params;

  const industryData = pagesData.find((item) => {
    const industryKey = Object.keys(item)[0];
    return industryKey.toLowerCase() === slug;
  });
  const industryKey = Object.keys(industryData)[0];
  const data = industryData[industryKey];

  return {
    title: data.metaTitle,
    description: data.metaDesc,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;

  const industryData = pagesData.find((item) => {
    const industryKey = Object.keys(item)[0];
    return industryKey.toLowerCase() === slug;
  });

  if (!industryData) {
    notFound();
  }

  const industryKey = Object.keys(industryData)[0];
  const data = industryData[industryKey];
  return (
    <div>
      <IndutriesTemplate data={data} IndustryKey={industryKey} />
    </div>
  );
}
