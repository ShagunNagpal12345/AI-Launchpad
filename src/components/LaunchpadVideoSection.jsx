import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import promoVideo from "../assets/Promo.mp4";
import SplitGradientHeading from "./SplitGradientHeading";

const highlights = [
  "Guided learning paths",
  "Live expert sessions",
  "Hands-on practice",
  "Real-world projects",
  "Career growth",
];

export default function LaunchpadVideoSection({ theme = "dark" }) {
  const isLight = theme === "light";
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {
      // Native controls remain available if playback needs another user gesture.
    });
  };

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) playVideo();
    else videoRef.current.pause();
  };

  useEffect(() => {
    window.addEventListener("play-launchpad-video", playVideo);
    return () => window.removeEventListener("play-launchpad-video", playVideo);
  }, []);

  return (
    <section
      id="launchpad-video"
      aria-labelledby="launchpad-video-title"
      className={`relative overflow-hidden px-4 py-8 sm:px-8 sm:py-10 lg:px-10 ${
        isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"
      }`}
    >
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[900px] text-center">
          <span className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] before:h-px before:w-[22px] before:bg-current before:opacity-60 ${isLight ? "text-[#f97316]" : "text-[#ff7628]"}`}>
            AI Launchpad in action
          </span>

          <SplitGradientHeading
            as="h2"
            theme={theme}
            id="launchpad-video-title"
            plain="See AI Launchpad"
            accent="in action"
            className={`mx-auto mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] ${
              isLight ? "text-[#071633]" : "text-[#f4f7fc]"
            }`}
          />

          <p className={`mx-auto mt-3 max-w-[720px] text-[15px] leading-6 ${isLight ? "text-[#667085]" : "text-[#9ba8bf]"}`}>
            See how AI Launchpad turns guided learning into real-world AI skills.
          </p>
        </div>

        <div className={`relative mx-auto mt-6 max-w-[860px] overflow-hidden rounded-[1.15rem] border shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] sm:rounded-[1.4rem] ${isLight ? "border-[#e4e9f1] bg-[#071633]" : "border-[#1d2d43] bg-[#020813]"}`}>
          <video
            id="launchpad-video-player"
            ref={videoRef}
            src={promoVideo}
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="aspect-video w-full bg-[#020813] object-contain"
          >
            Your browser does not support the video element.
          </video>

          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlayback}
              aria-label="Play AI Launchpad introduction video"
              className="group absolute inset-0 grid place-items-center bg-[#020813]/40 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#ff8a25]"
            >
              <span className="flex flex-col items-center gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#f7f9fc] text-[#071633] shadow-[0_14px_35px_rgba(0,0,0,0.38)] transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                </span>
                
              </span>
            </button>
          )}

          <div className="pointer-events-none absolute bottom-3 left-3 hidden items-center gap-2 rounded-full bg-[#071633]/85 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-white ring-1 ring-white/15 sm:flex">
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            AI Launchpad preview
          </div>
        </div>

        <div className="mt-4 flex snap-x gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {highlights.map((highlight) => (
            <span key={highlight} className={`shrink-0 snap-start rounded-full border px-3.5 py-1.5 text-[13px] font-semibold ${isLight ? "border-[#e4e9f1] bg-white text-[#667085]" : "border-[#1d2d43] bg-[#0c1a2d] text-[#9ba8bf]"}`}>
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
