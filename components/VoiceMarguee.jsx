"use client";

import React, { useState } from "react";
import { Play, Square } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import { useLanguage } from "@/hooks/Language";

const VoiceMarguee = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  const Voices = [
    {
      EN: {
        id: 1,
        name: "American English",
        image: "/AmericanFlag.webp",
        voice: "/voices/AmericanEnglish.mp3",
      },
      ES: {
        id: 1,
        name: "Inglés Americano",
        image: "/AmericanFlag.webp",
        voice: "/voices/AmericanEnglish.mp3",
      },
    },
    {
      EN: {
        id: 2,
        name: "Spanish",
        image: "/SpanishFlag.svg",
        voice: "/voices/Spanish.mp3",
      },
      ES: {
        id: 2,
        name: "Español",
        image: "/SpanishFlag.svg",
        voice: "/voices/Spanish.mp3",
      },
    },
    {
      EN: {
        id: 3,
        name: "French",
        image: "/Flag_of_France.png",
        voice: "/voices/French.mp3",
      },
      ES: {
        id: 3,
        name: "Francés",
        image: "/Flag_of_France.png",
        voice: "/voices/French.mp3",
      },
    },
    {
      EN: {
        id: 4,
        name: "Italian",
        image: "/Flag_of_Italy.png",
        voice: "/voices/Italian.mp3",
      },
      ES: {
        id: 4,
        name: "Italiano",
        image: "/Flag_of_Italy.png",
        voice: "/voices/Italian.mp3",
      },
    },
    {
      EN: {
        id: 5,
        name: "Portuguese",
        image: "/Flag_of_Portugal.png",
        voice: "/voices/Portugal.mp3",
      },
      ES: {
        id: 5,
        name: "Portugesa",
        image: "/Flag_of_Portugal.png",
        voice: "/voices/Portugal.mp3",
      },
    },
    {
      EN: {
        id: 6,
        name: "Mexican",
        image: "/Flag_of_Mexico.png",
        voice: "/voices/Mexican.mp3",
      },
      ES: {
        id: 6,
        name: "Mexicano",
        image: "/Flag_of_Mexico.png",
        voice: "/voices/Mexican.mp3",
      },
    },
    {
      EN: {
        id: 7,
        name: "British English",
        image: "/Flag_of_the_United_Kingdom.webp",
        voice: "/voices/BritishEnglish.mp3",
      },
      ES: {
        id: 7,
        name: "Inglés Reino Unido",
        image: "/Flag_of_the_United_Kingdom.webp",
        voice: "/voices/BritishEnglish.mp3",
      },
    },
    {
      EN: {
        id: 8,
        name: "Colombian",
        image: "/Flag_of_Colombia.png",
        voice: "/voices/Colombian.mp3",
      },
      ES: {
        id: 8,
        name: "Colombiano",
        image: "/Flag_of_Colombia.png",
        voice: "/voices/Colombian.mp3",
      },
    },
    {
      EN: {
        id: 9,
        name: "Argentinian",
        image: "/Flag_of_Argentina.webp",
        voice: "/voices/Argentina.mp3",
      },
      ES: {
        id: 9,
        name: "Argentino",
        image: "/Flag_of_Argentina.webp",
        voice: "/voices/Argentina.mp3",
      },
    },
  ];

  const Playing = (id, voiceUrl) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (playingId === id) {
      setPlayingId(null);
      setCurrentAudio(null);
    } else {
      const audio = new Audio(voiceUrl);
      audio.play();
      setCurrentAudio(audio);
      setPlayingId(id);

      audio.onended = () => {
        setPlayingId(null);
        setCurrentAudio(null);
      };
    }
  };

  const { currentLanguage } = useLanguage();

  return (
    <div className="relative flex  w-full h-full flex-col items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{
          background: "linear-gradient(to right, white 50%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{
          background: "linear-gradient(to left, white 50%, transparent 100%)",
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
            {playingId === voice.EN.id ? (
              <Square
                size={16}
                fill="#196f95"
                className="text-[#196f95] cursor-pointer"
                onClick={() =>
                  Playing(voice.EN.id, voice[currentLanguage].voice)
                }
              />
            ) : (
              <Play
                size={16}
                fill="#196f95"
                className="text-[#196f95] cursor-pointer"
                onClick={() =>
                  Playing(voice.EN.id, voice[currentLanguage].voice)
                }
              />
            )}
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
            {playingId === voice.EN.id ? (
              <Square
                size={16}
                fill="#196f95"
                className="text-[#196f95] cursor-pointer"
                onClick={() =>
                  Playing(voice.EN.id, voice[currentLanguage].voice)
                }
              />
            ) : (
              <Play
                size={16}
                fill="#196f95"
                className="text-[#196f95] cursor-pointer"
                onClick={() =>
                  Playing(voice.EN.id, voice[currentLanguage].voice)
                }
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default VoiceMarguee;
