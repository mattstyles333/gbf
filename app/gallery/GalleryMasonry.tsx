"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
  heightClass: string;
};

export default function GalleryMasonry({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <figure key={image.src} className="card mb-5 break-inside-avoid overflow-hidden bg-white">
            <button type="button" className="block w-full text-left" onClick={() => setActiveIndex(index)}>
              <div className={`relative w-full ${image.heightClass}`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 6}
                />
              </div>
              <figcaption className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600 mb-2">
                  {image.category}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">{image.title}</p>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 sm:p-6" onClick={() => setActiveIndex(null)}>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
              <div className="relative h-[70vh] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300 mb-1">
                    {activeImage.category}
                  </p>
                  <p className="text-base font-medium">{activeImage.title}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length,
                      )
                    }
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
                    }
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
