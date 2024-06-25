import Link from "next/link";

export default function Imprint() {
  return (
    <div className="p-6 bg-black text-white font-mono text-s leading-5 ">
      <nav className="font-mono text-center md:flex md:justify-between md:w-[900px] md:flex-row items-center pb-12">
        <h1 className="font-thin">
          <Link href="/" className="link">NILS MÜLLER(1)</Link>
        </h1>
        <h1 className="font-thin">IMPRINT</h1>
        <h1 className="font-thin">
          <Link href="/" className="link">NILS MÜLLER(1)</Link>
        </h1>
      </nav>
      <main className="font-mono md:w-[900px]">
        <section>
          <h2 className="font-bold tracking-wider bullet_point">CONTACT</h2>
          <p className="ml-[50px]">
            Name: Nils Müller<br />
            Address: Pastorenstraße 18, 20459 Hamburg<br />
            E-mail: <a href="mailto:info@nils-mueller.com" className="link">info@nils-mueller.com</a><br />
            Mobile: <a href="tel:+49 151 15776494" className="link">+49 151 15776494</a>
          </p>
        </section>
      </main>
      <footer>
        <h2 className="font-bold tracking-wider bullet_point">
          <Link href="/" className="link">BACK</Link>
        </h2>
      </footer>
    </div>
  );
}
