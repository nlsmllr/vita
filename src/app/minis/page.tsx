const minis = [
  { src: 'https://fortytwo-and-counting.vercel.app/', title: 'Fortytwo and counting' },
  { src: 'https://i-choose-u.vercel.app/', title: 'I choose u' },
  { src: 'https://worth-your-time.vercel.app/', title: 'Worth your time' },
];

export default function Minis() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-12 px-4 py-12 md:py-20">
      {minis.map(mini => (
        <section key={mini.src} className="clay h-[90vh] w-full p-3 md:h-[80vh] md:w-[80vw]">
          <iframe src={mini.src} title={mini.title} className="h-full w-full rounded-[1.5rem] bg-white" />
        </section>
      ))}
    </main>
  );
}
