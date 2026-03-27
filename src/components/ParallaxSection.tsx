import SectionReveal from "@/components/SectionReveal";

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
  return (
    <div className={`relative ${height}`}>
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
