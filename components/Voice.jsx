"use client";

import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import { Play } from "lucide-react";
import { useLanguage } from "@/hooks/Language";

const Voices = [
  {
    EN: {
      id: 1,
      name: "American English",
      image: "/AmericanFlag.webp",
    },
    ES: {
      id: 1,
      name: "Inglés Americano",
      image: "/AmericanFlag.webp",
    },
  },
  {
    EN: {
      id: 2,
      name: "Spanish",
      image: "/SpanishFlag.svg",
    },
    ES: {
      id: 2,
      name: "Español",
      image: "/SpanishFlag.svg",
    },
  },
  {
    EN: {
      id: 3,
      name: "French",
      image: "/Flag_of_France.png",
    },
    ES: {
      id: 3,
      name: "Francés",
      image: "/Flag_of_France.png",
    },
  },
  {
    EN: {
      id: 4,
      name: "Italian",
      image: "/Flag_of_Italy.png",
    },
    ES: {
      id: 4,
      name: "Italiano",
      image: "/Flag_of_Italy.png",
    },
  },
  {
    EN: {
      id: 5,
      name: "Portuguese",
      image: "/Flag_of_Portugal.png",
    },
    ES: {
      id: 5,
      name: "Portugesa",
      image: "/Flag_of_Portugal.png",
    },
  },
  {
    EN: {
      id: 6,
      name: "Mexican",
      image: "/Flag_of_Mexico.png",
    },
    ES: {
      id: 6,
      name: "Mexicano",
      image: "/Flag_of_Mexico.png",
    },
  },
  {
    EN: {
      id: 7,
      name: "British English",
      image: "/Flag_of_the_United_Kingdom.webp",
    },
    ES: {
      id: 7,
      name: "Inglés Reino Unido",
      image: "/Flag_of_the_United_Kingdom.webp",
    },
  },
  {
    EN: {
      id: 8,
      name: "Colombian",
      image: "/Flag_of_Colombia.png",
    },
    ES: {
      id: 8,
      name: "Colombiano",
      image: "/Flag_of_Colombia.png",
    },
  },
  {
    EN: {
      id: 9,
      name: "Argentinian",
      image: "/Flag_of_Argentina.webp",
    },
    ES: {
      id: 9,
      name: "Argentino",
      image: "/Flag_of_Argentina.webp",
    },
  },
];

const Lang = {
  EN: {
    badge: "Voices",
    title: "Configure your Custom Agent",
    button: "Get Started",
    title2: "Customize the Language, Voice and Access to fit Your Business",
    title3: "Explore Solutions",
    Desc3: "Discover a wide range of Services to enhance your AI experience.",
    box1: "Voice Agents",
    box2: "Automations",
  },
  ES: {
    badge: "Voces",
    title: "Configura tu Agente a medida",
    button: "Comenzar",
    title2: "Personaliza el idioma, la voz y el acento a tu negocio",
    title3: "Explorar Soluciones",
    Desc3:
      "Descubre una amplia gama de servicios para mejorar tu experiencia con la IA.",
    box1: "Agentes de Voz",
    box2: "Automatizaciones",
  },
};

export default function Voice() {
  const { currentLanguage } = useLanguage();

  return (
    <section id="Voice" className="flex flex-col p-16 bg-white font-sans">
      {/* Navigation */}
      <div className="flex gap-2 items-center mb-8">
        <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {Lang[currentLanguage].badge}
        </span>
      </div>

      <div className="flex justify-between items-center mb-14">
        <h1 className="text-4xl font-light text-gray-900 leading-10 max-w-[50%]">
          {Lang[currentLanguage].title}
        </h1>

        <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
          {Lang[currentLanguage].button}
          <ArrowUpRight
            size={16}
            className="transform transition-transform duration-200 group-hover:rotate-45"
          />
        </button>
      </div>

      <div className="flex mb-16">
        <div
          className={`w-[500px] h-[300px] rounded-xl bg-cover bg-center`}
          style={{ backgroundImage: `url(/Voice.jpg)` }}
        ></div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
            style={{
              background:
                "linear-gradient(to right, white 50%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
            style={{
              background:
                "linear-gradient(to left, white 50%, transparent 100%)",
            }}
          />
          <Marquee pauseOnHover className="[--duration:20s]">
            {Voices.slice(0, 5).map((voice) => (
              <div
                key={voice.EN.id}
                className="flex items-center gap-4 p-2 bg-[rgba(25,111,159,0.2)] rounded-full"
              >
                <img
                  src={voice.EN.image}
                  alt={voice.EN.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">
                  {currentLanguage === "EN" ? voice.EN.name : voice.ES.name}
                </span>
                <Play size={16} fill="#196f95" className="text-[#196f95]" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:30s]">
            {Voices.slice(5, 9).map((voice) => (
              <div
                key={voice.EN.id}
                className="flex items-center gap-4 p-2 bg-[rgba(25,111,159,0.2)] rounded-full"
              >
                <img
                  src={voice.EN.image}
                  alt={voice.EN.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">
                  {currentLanguage === "EN" ? voice.EN.name : voice.ES.name}
                </span>
                <Play size={16} fill="#196f95" className="text-[#196f95]" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light text-gray-900">
              {Lang[currentLanguage].title3}
            </h2>
            <p className="text-gray-600 max-w-[400px]">
              {Lang[currentLanguage].Desc3}
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="relative bg-cover bg-center w-[300px] h-[200px] rounded-xl bg-gray-300 flex items-center justify-center group cursor-pointer ">
            <span className="text-gray-600 group-hover:text-white ease-in-out duration-300">
              {Lang[currentLanguage].box1}
            </span>
          </div>
          <div className="relative w-[300px] h-[200px] rounded-xl bg-gray-300 flex items-center justify-center group cursor-pointer ">
            <span className="text-gray-600 group-hover:text-white ease-in-out duration-300">
              {Lang[currentLanguage].box2}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
