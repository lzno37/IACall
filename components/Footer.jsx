"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/Language";

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const navLinks = {
    EN: {
      solution: "Other Solutions",
      industries: "Industries",
      partners: "Partners",
      privacy: "Privacy",
      terms: "Terms",
      legal: "Legal Notice",
    },
    ES: {
      solution: "Otras Soluciones",
      industries: "Industrias",
      partners: "Socios",
      privacy: "Privacidad",
      terms: "Términos",
      legal: "Aviso Legal",
    },
    link1: "/automations",
    link2: "/healthcare",
    link3: "/partners",
    link4: "/privacy",
    link5: "/terms",
    link6: "/legal",
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 py-12 md:py-16">
        {/* Logo Section */}
        <div className="flex flex-col items-start mb-12">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Aiphier Logo"
              width={150}
              height={40}
              className="mb-6"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center max-md:flex-col max-md:items-start  gap-8 mb-12">
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link1}>{navLinks[currentLanguage].solution}</a>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link2}>{navLinks[currentLanguage].industries}</a>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link3}>{navLinks[currentLanguage].partners}</a>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link4}> {navLinks[currentLanguage].privacy}</a>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link5}>{navLinks[currentLanguage].terms}</a>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <a href={navLinks.link6}>{navLinks[currentLanguage].legal}</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Iacall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
