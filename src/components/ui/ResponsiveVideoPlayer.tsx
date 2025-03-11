"use client"

import { useRef, useState } from 'react';
import { Pause, Play } from '..';
import { cn } from '@/utils/cn';

interface ResponsiveVideoPlayerProps {
  videoSrc: string;
}

export const ResponsiveVideoPlayer: React.FC<ResponsiveVideoPlayerProps> = ({
  videoSrc
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = (): void => {
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
    <section className="flex items-center justify-center">
      <div className="relative bg-primary w-full h-[32rem] rounded-4xl overflow-hidden">
        <video
          ref={videoRef}
          className="min-w-full h-full aspect-video bg-black object-cover"
          src={videoSrc}
          autoPlay={isPlaying}
          loop
        />
        <div
          className="group absolute bottom-6 right-6 p-1 border-1 hover:scale-125 border-white rounded-full transition-all cursor-pointer"
          onClick={togglePlayPause}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full group-hover:scale-90 transition-all">
            <span className={cn(
              "w-8 h-8 text-accent transition-all",
              isPlaying ? "w-6 h-6" : "ml-3"
            )}>
              {isPlaying ? <Pause /> : <Play />}
            </span>
          </div>
        </div>
      </div>
    </section >
  );
};