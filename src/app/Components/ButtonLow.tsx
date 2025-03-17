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
  const buttonClasses = `flex select-none items-center justify-center rounded-[25px] text-2xl font-light text-gray-500 shadow-[inset_3px_3px_6px_#c7cdd4,inset_-3px_-3px_6px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#c7cdd4,inset_-5px_-5px_10px_#ffffff] active:scale-95 active:shadow-[inset_2px_2px_4px_#c7cdd4,inset_-2px_-2px_4px_#ffffff] disabled:cursor-not-allowed disabled:opacity-50 ${className}`;

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
