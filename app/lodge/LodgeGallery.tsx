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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = images[activeIndex];

  return (
    <>
      <div className="card overflow-hidden">
        <button type="button" className="relative block h-[26rem] w-full bg-slate-200 sm:h-[32rem]" onClick={() => setLightboxOpen(true)}>
          <Image
            src={active.src}
            alt={active.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        </button>
        <div className="border-t border-slate-100 bg-white p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">
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
                className={`relative h-16 overflow-hidden rounded-lg border transition ${
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

      {lightboxOpen && (
        <div className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 sm:p-6" onClick={() => setLightboxOpen(false)}>
          <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
              <div className="relative h-[70vh] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
                <Image src={active.src} alt={active.alt} fill className="object-contain" sizes="100vw" priority />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-white">
                <p className="text-base font-medium">{active.title}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
