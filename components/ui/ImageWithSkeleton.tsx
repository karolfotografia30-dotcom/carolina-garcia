"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fill?: boolean;
  blurDataURL?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  fill = false,
  blurDataURL,
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Shimmer skeleton */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-shimmer bg-gradient-to-r from-charcoal via-white/5 to-charcoal bg-[length:1000px_100%] z-10"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
