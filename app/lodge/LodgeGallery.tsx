"use client";

import { useState } from "react";
import Image from "next/image";

type LodgeImage = {
  src: string;
  alt: string;
  title: string;
};

export default function LodgeGallery({ images }: { images: LodgeImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="card overflow-hidden">
      <div className="relative h-[26rem] sm:h-[32rem] bg-slate-200">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </div>
      <div className="p-5 sm:p-6 border-t border-slate-100 bg-white">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600 mb-2">
              Lodge Gallery
            </p>
            <h3 className="text-xl font-bold">{active.title}</h3>
          </div>
          <p className="text-sm text-slate-500">
            {activeIndex + 1} of {images.length}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 rounded-lg overflow-hidden border transition ${
                index === activeIndex
                  ? "border-ocean-500 ring-2 ring-ocean-200"
                  : "border-slate-200 hover:border-ocean-300"
              }`}
              aria-label={`View ${image.title}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
