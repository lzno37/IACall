/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

export const AvatarCircles = ({ numPeople, className, avatarUrls }) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-8 w-8 rounded-full border-3 border-black dark:border-gray-800"
          src={url.imageUrl}
          width={20}
          height={20}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
