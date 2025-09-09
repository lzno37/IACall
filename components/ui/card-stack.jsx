"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Wrapper that defines the stack size */}
      <div className="relative">
        {/* Ghost card (invisible) to reserve natural size */}
        <div className="opacity-0 pointer-events-none">
          <div className="bg-white dark:bg-black rounded-xl p-3 shadow-md border border-neutral-200 dark:border-white/[0.1] flex items-center justify-between w-96">
            <img
              src="/favicon.png"
              alt="icon"
              className="w-10 h-10 rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black dark:text-white">
                {cards[0].content}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                {cards[0].name} - {cards[0].designation}
              </p>
            </div>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              Ahora
            </span>
          </div>
        </div>

        {/* Actual stacked cards */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute left-0 right-0 bg-white dark:bg-black rounded-xl p-3 shadow-md border border-neutral-200 dark:border-white/[0.1] flex items-center justify-between w-96"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            {/* Left side: favicon + text */}
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="icon"
                className="w-10 h-10 rounded-lg bg-[#196f95]"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-black dark:text-white">
                  {card.content}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  {card.name} - {card.designation}
                </p>
              </div>
            </div>

            {/* Right side: time */}
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              Ahora
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
