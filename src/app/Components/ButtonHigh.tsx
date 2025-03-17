import Link from 'next/link';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
}

export default function ButtonLow({ onClick, disabled = false, children, title, href, className }: ButtonProps) {
  const buttonClasses = `relative flex select-none items-center justify-center rounded-full text-[#ababab] bg-primaryBackground shadow-[3px_3px_6px_#c5c7c9,-3px_-3px_6px_#ffffff] transition-all duration-200 hover:shadow-[1px_1px_2px_#c5c7c9,-1px_-1px_2px_#ffffff] active:shadow-[inset_3px_3px_6px_#c5c7c9,inset_-3px_-3px_6px_#ffffff] ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} title={title} className={buttonClasses}>
      {children}
    </button>
  );
}
