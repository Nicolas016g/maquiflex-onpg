"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  aspect?: "video" | "cinematic" | "square";
}

export function VideoPlayer({
  src,
  title,
  poster,
  className = "",
  autoPlay = false,
  muted: initialMuted = true,
  loop = false,
  aspect = "video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(initialMuted);
  const [showControls, setShowControls] = useState(false);

  const aspectClass =
    aspect === "cinematic"
      ? "aspect-[21/9]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function goFullscreen() {
    videoRef.current?.requestFullscreen();
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-chrome/15 bg-black ${aspectClass} ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={togglePlay}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 transition-opacity duration-300 ${
          showControls || !playing ? "opacity-100" : "opacity-0"
        }`}
      />

      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Reproduzir ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-chrome/40 bg-black/60 backdrop-blur-sm transition-transform hover:scale-105">
            <Play className="ml-1 h-7 w-7 text-chrome" fill="currentColor" />
          </span>
        </button>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-3 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="truncate text-xs font-medium text-white/90">{title}</p>
        <div className="flex shrink-0 gap-1">
          <button
            onClick={togglePlay}
            className="rounded-sm p-1.5 text-chrome hover:bg-white/10 hover:text-white"
            aria-label={playing ? "Pausar" : "Reproduzir"}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="rounded-sm p-1.5 text-chrome hover:bg-white/10 hover:text-white"
            aria-label={muted ? "Ativar som" : "Silenciar"}
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            onClick={goFullscreen}
            className="rounded-sm p-1.5 text-chrome hover:bg-white/10 hover:text-white"
            aria-label="Tela cheia"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
