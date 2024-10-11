import Link from 'next/link';

interface ContactButtonProps {
  link: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ link }) => (
  <Link href={`/${link}`} className="cursor-none">
    <div className="fixed right-5 top-5 z-30 flex h-5 w-5 animate-none items-center justify-center rounded-full bg-red-500 transition duration-200 hover:blur-sm">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
        className="transition-none" // Prevent SVG from animating
      >
        <path d="M172-126q-53 0-89.5-36.5T46-252v-456q0-53 36.5-89.5T172-834h616q53 0 89.5 36.5T914-708v456q0 53-36.5 89.5T788-126H172Zm308-271L172-597v345h616v-345L480-397Zm0-111 308-200H172l308 200Zm-308-89v-111 456-345Z" />
      </svg> */}
    </div>
  </Link>
);
