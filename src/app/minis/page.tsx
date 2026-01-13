export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {/* <h1>Nils Müller</h1> */}
      <section className="h-[90vh] w-screen md:h-[80vh] md:w-[80vw]">
        <iframe
          src="https://fortytwo-and-counting.vercel.app/"
          className="mb-10 rounded-3xl"
          width="100%"
          height="100%"
        ></iframe>
        <iframe src="https://i-choose-u.vercel.app/" className="mb-10 rounded-3xl" width="100%" height="100%"></iframe>
        <iframe
          src="https://worth-your-time.vercel.app/"
          className="mb-10 h-[110vh] overflow-visible rounded-3xl md:h-full"
          width="100%"
          height="100%"
        ></iframe>
      </section>
    </main>
  );
}
