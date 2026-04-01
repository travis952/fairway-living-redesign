import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  image: string;
  alt: string;
  height?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayClass?: string;
}

const ParallaxSection = ({
  image,
  alt,
  height = "h-[60vh]",
  children,
  overlay = true,
  overlayClass,
}: ParallaxSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      // background-attachment:fixed doesn't work on iOS/most mobile browsers
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className={`relative ${height} overflow-hidden`}>
      {isMobile ? (
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label={alt}
        />
      )}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClass || 'bg-gradient-to-b from-primary/10 via-transparent to-primary/40'}`} />
      )}
      {children && (
        <div className="relative z-10 h-full flex items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxSection;
