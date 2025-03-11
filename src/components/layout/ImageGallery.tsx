"use client"

import { useState } from 'react';
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images.length > 0 ? images[0] : null);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full object-cover rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[0]}
          alt={`${title} - featured image`}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="transition-transform object-cover duration-500 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main featured image */}
      <div className="relative w-full h-max aspect-video rounded-lg overflow-hidden shadow-lg">
        <Image
          src={activeImage || images[0]}
          alt={`${title} - featured image`}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden cursor-pointer shadow-sm transition-all duration-200 ${activeImage === image ? 'ring-2 ring-accent scale-95' : 'hover:scale-95'}`}
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