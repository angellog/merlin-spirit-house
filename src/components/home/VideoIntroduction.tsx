"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";

export default function VideoIntroduction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-primary">
              Personal Message
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-3xl text-gold-light md:text-4xl">
              Personal Video: Hear from {CLIENT_TITLE} {CLIENT_NAME} Directly
            </h2>
            <p className="mb-6 text-text-secondary leading-relaxed">
              Authentic spiritual work begins with trust. I invite you to listen to this personal introduction to understand the ancestral authority and sincerity behind my practice.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-xs text-gold-primary">✓</span>
                <p className="text-sm text-text-secondary">Authentic traditional lineage from Uganda.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-xs text-gold-primary">✓</span>
                <p className="text-sm text-text-secondary">Direct personal attention to every case.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-xs text-gold-primary">✓</span>
                <p className="text-sm text-text-secondary">100% confidential and private consultations.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-gold-primary/30 bg-black shadow-[0_0_50px_rgba(201,168,76,0.15)]">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/images/portrait/prof-ndaula-headshot.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/prof-ndaula-final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/20"
                  aria-label="Play video"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-primary text-deepnight shadow-2xl transition-transform hover:scale-110">
                    <svg className="ml-1 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}

              {isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
                  aria-label="Pause video"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </button>
              )}
            </div>
            
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-gold-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
