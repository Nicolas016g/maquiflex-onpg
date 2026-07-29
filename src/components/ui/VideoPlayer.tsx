"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { GradientFrame } from "./GradientFrame";

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  aspect?: "video" | "cinematic" | "square";
  playbackRate?: number;
  showRemainingCountdown?: boolean;
}

function formatRemainingMinutes(seconds: number) {
  const total = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(total / 60);
  const secs = total % 60;

  if (minutes === 0) return `${secs}s`;
  if (secs === 0) return `${minutes} min`;
  return `${minutes} min ${secs}s`;
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
  playbackRate = 1,
  showRemainingCountdown = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(initialMuted);
  const [showControls, setShowControls] = useState(false);
  const [error, setError] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;
  }, [playbackRate, src]);

  function updateRemainingTime() {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    setRemainingSeconds(Math.max(0, video.duration - video.currentTime));
  }

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
      void video.play().catch(() => setError(true));
    } else {
      video.pause();
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function goFullscreen() {
    const el = containerRef.current;
    if (el?.requestFullscreen) void el.requestFullscreen();
  }

  return (
    <GradientFrame className={`group ${aspectClass} ${className}`}>
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden bg-black"
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
        className="relative z-0 h-full w-full object-contain bg-black"
        onLoadedMetadata={() => {
          const video = videoRef.current;
          if (!video) return;
          video.playbackRate = playbackRate;
          if (showRemainingCountdown) updateRemainingTime();
        }}
        onTimeUpdate={() => {
          if (showRemainingCountdown) updateRemainingTime();
        }}
        onPlay={() => {
          setPlaying(true);
          setError(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          if (showRemainingCountdown) setRemainingSeconds(0);
        }}
        onError={() => setError(true)}
        onClick={togglePlay}
      />

      {showRemainingCountdown && remainingSeconds !== null && !error && (
        <div
          className="absolute right-3 top-3 z-20 rounded-sm border border-chrome/20 bg-black/75 px-2.5 py-1 text-xs font-semibold tabular-nums text-chrome backdrop-blur-sm"
          aria-live="polite"
        >
          {remainingSeconds > 0
            ? `${formatRemainingMinutes(remainingSeconds)} restantes`
            : "Finalizado"}
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/90 p-4 text-center text-sm text-text-muted">
          Não foi possível carregar o vídeo. Tente novamente em instantes.
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          showControls && playing ? "opacity-100" : "opacity-0"
        }`}
      />

      {!playing && !error && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center"
          aria-label={`Reproduzir ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-chrome/40 bg-black/60 backdrop-blur-sm transition-transform hover:scale-105">
            <Play className="ml-1 h-7 w-7 text-chrome" fill="currentColor" />
          </span>
        </button>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-2 p-3 transition-opacity duration-300 ${
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
    </GradientFrame>
  );
}
