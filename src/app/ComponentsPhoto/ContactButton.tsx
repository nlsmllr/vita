import Link from 'next/link';

interface ContactButtonProps {
  link: string;
  contact: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ link, contact }) => (
  <Link href={`/${link}`} className="cursor-none">
    <div className="fixed right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950">
      {contact ? (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff">
          <path d="M166.78-140.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-466.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h626.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v466.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H166.78ZM480-415.69l-313.22-200v368.91h626.44v-368.91L480-415.69Zm0-97.53 313.22-200H166.78l313.22 200ZM166.78-615.69v-97.53V-246.78v-368.91Z" />
        </svg>
      ) : (
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M642-48 209-480l433-432 103 103-329 329 329 329L642-48Z" />
        </svg>
      )}
    </div>
  </Link>
);
