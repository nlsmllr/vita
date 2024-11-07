import Link from 'next/link';

interface ContactButtonProps {
  link: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ link }) => (
  <Link href={`/${link}`} className="cursor-none">
    <div className="fixed -right-10 -top-10 z-30 transition duration-100 hover:blur-sm">
      <div className="dotPulse flex h-20 w-20 items-center justify-center font-bold text-white"></div>
    </div>
  </Link>
);
