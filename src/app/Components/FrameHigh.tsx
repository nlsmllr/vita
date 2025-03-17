interface FrameHighProps {
  children: React.ReactNode;
  className?: string;
}

export default function FrameHigh({ children, className = '' }: FrameHighProps) {
  const frameClasses = `rounded-3xl border-secondaryBackground bg-primaryBackground shadow-[10px_10px_20px_#c5c7c9,-10px_-10px_20px_#ffffff] ${className}`;

  return <div className={frameClasses}>{children}</div>;
}
