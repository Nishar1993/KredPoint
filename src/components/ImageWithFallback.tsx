import {useState} from 'react';
import {Image as ImageIcon} from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  className = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F4F1EC] via-[#EAE3D7] to-[#E7EFE2] p-6 text-center text-[#3D332B] ${className}`}
      >
        <ImageIcon className="h-8 w-8 text-[#465F38]" aria-hidden="true" />
        <p className="text-sm font-medium">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
