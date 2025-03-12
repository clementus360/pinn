"use client"
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images.length > 0 ? images[0] : null);
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerStyle, setContainerStyle] = useState({
    height: "400px",
    maxHeight: "70vh"
  });

  // Load and measure the image
  useEffect(() => {
    if (!activeImage) return;

    setIsLoading(true);

    // Reset to default height while loading to prevent jarring transitions
    setContainerStyle({
      height: "400px",
      maxHeight: "70vh"
    });

    const img = new window.Image();
    img.src = activeImage;

    img.onload = () => {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      const aspectRatio = naturalWidth / naturalHeight;

      // Get container width
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;

      // Calculate appropriate height based on container width and image aspect ratio
      let newHeight;

      if (aspectRatio >= 1) {
        // For landscape or square images
        // Height should be proportional to width, respecting aspect ratio
        // with a minimum height for very wide panoramas
        newHeight = Math.max(
          Math.min(containerWidth / aspectRatio, containerWidth * 0.7),
          300
        );
      } else {
        // For portrait images
        // Set a reasonable height that's not too tall
        newHeight = Math.min(
          containerWidth * 0.9,
          600
        );
      }

      // Update container style with smooth transition
      setContainerStyle({
        height: `${newHeight}px`,
        maxHeight: "80vh"
      });

      // Small delay before showing the image to allow container to resize
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };

    return () => {
      img.onload = null;
    };
  }, [activeImage]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Trigger same calculation as on image load
      if (activeImage) {
        const img = new window.Image();
        img.src = activeImage;
        img.onload = () => {
          const naturalWidth = img.naturalWidth;
          const naturalHeight = img.naturalHeight;
          const aspectRatio = naturalWidth / naturalHeight;
          const containerWidth = containerRef.current?.clientWidth || window.innerWidth;

          let newHeight;
          if (aspectRatio >= 1) {
            newHeight = Math.max(
              Math.min(containerWidth / aspectRatio, containerWidth * 0.7),
              300
            );
          } else {
            newHeight = Math.min(
              containerWidth * 0.9,
              600
            );
          }

          setContainerStyle({
            height: `${newHeight}px`,
            maxHeight: "80vh"
          });
        };
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeImage]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div
        ref={containerRef}
        className="relative w-full rounded-lg overflow-hidden shadow-lg bg-black/5 transition-all duration-500 ease-in-out"
        style={containerStyle}
      >
        <Image
          ref={imageRef}
          src={images[0]}
          alt={`${title} - featured image`}
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 60vw"
          className={`transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 hover:scale-105'}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main featured image with truly adaptive sizing */}
      <div
        ref={containerRef}
        className="relative w-full rounded-lg overflow-hidden shadow-lg bg-black/5 transition-all duration-500 ease-in-out"
        style={containerStyle}
      >
        <Image
          ref={imageRef}
          src={activeImage || images[0]}
          alt={`${title} - featured image`}
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 60vw"
          className={`transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 hover:scale-105'}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden cursor-pointer shadow-sm transition-all duration-200 ${activeImage === image ? 'ring-2 ring-accent scale-95' : 'hover:scale-95'
              }`}
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image}
              alt={`${title} - thumbnail ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 20vw, 10vw"
              className="transition-opacity duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};