"use client";

import { useEffect, useRef } from "react";

const heroSrc = "/videos/bottle-creek-hero-casting.mp4";
const heroPoster = "/images/gallery/sightfishing-for-bonefish.jpg";

export default function ReviewsHero({
  rating,
  reviewCount,
}: {
  rating: string;
  reviewCount: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay can still be blocked; muted + playsInline is the intended path.
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] min-h-[26rem] max-h-[40rem] overflow-hidden bg-ocean-950"
      aria-label="Casting for Bonefish"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroPoster}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={heroSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-ocean-950/20 via-ocean-950/35 to-ocean-950/78"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-10 pt-16 text-center sm:px-8 sm:pb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
          Guest Reviews
        </h1>
        <p className="text-ocean-100 text-base sm:text-lg font-medium tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
          Casting for Bonefish · Bottle Creek, North Caicos
        </p>
        <div
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md shadow-lg shadow-ocean-950/20"
          aria-label={`${rating} out of 5 from ${reviewCount} Tripadvisor reviews`}
        >
          <span className="text-sand-400 tracking-[0.12em] text-base" aria-hidden>
            ★★★★★
          </span>
          <span className="text-white text-sm sm:text-base">
            {rating} · {reviewCount} reviews on Tripadvisor
          </span>
        </div>
      </div>
    </section>
  );
}
