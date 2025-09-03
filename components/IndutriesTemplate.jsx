"use client";
import React from "react";
import IndusMainSec from "./IndusMainSec";
import MedicalCallReferral from "./Section";
import Orbiting from "./OrbitingCi";

import FaQs from "./FaQs";
import Contact from "./Contact";
import { useLanguage } from "@/hooks/Language";
import Features from "./Features";

const IndutriesTemplate = ({ data, IndustryKey }) => {
  const { currentLanguage } = useLanguage();

  const MainData = data[currentLanguage] || data["EN"];

  const {
    Badge,
    title,
    description,
    image,
    Box1Title,
    Box1Description,
    Box1Image,
    Box2Title,
    Box2Description,
    Box2Image,
    Box3Title,
    Box3Description,
    Box3Image,
  } = MainData;

  return (
    <div>
      <IndusMainSec
        Badge={Badge}
        Title={title}
        Description={description}
        Image={image}
      />
      <MedicalCallReferral
        title={Box1Title}
        description={Box1Description}
        Image={Box1Image}
      />
      <MedicalCallReferral
        title={Box2Title}
        description={Box2Description}
        Image={Box2Image}
        type="flex-row-reverse"
      />
      <MedicalCallReferral
        title={Box3Title}
        description={Box3Description}
        Image={Box3Image}
      />
      <Orbiting />
      <Features />
      <FaQs />
      <Contact />
    </div>
  );
};

export default IndutriesTemplate;
