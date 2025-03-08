'use client';

import { useEffect, useState } from 'react';

type Planet = { name: string };

type PlanetsResponse = { results: Planet[] };

export default function Home() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  async function apiCall() {
    try {
      const response = await fetch('https://swapi.dev/api/planets');
      if (!response.ok) {
        throw new Error('nope');
      }
      const data = (await response.json()) as PlanetsResponse;
      setPlanets(data.results);
    } catch (error) {
      console.log(error);
      setPlanets([]);
    }
  }
  useEffect(() => {
    void apiCall();
  }, []);

  return (
    <main className="text-black">
      {planets.map((planet, index) => (
        <div key={index}>
          <p>{planet.name}</p>
        </div>
      ))}
    </main>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';

// type Planet = { name: string; population: number };
// type PlanetsResponse = { results: Planet[] };

// export default function Home() {
//   const [planets, setPlanets] = useState<Planet[]>([]);

//   async function apiCall() {
//     try {
//       const response = await fetch('https://swapi.dev/api/planets');
//       if (!response.ok) {
//         throw new Error('Error');
//       }
//       const data = (await response.json()) as PlanetsResponse;
//       setPlanets(data.results);
//     } catch (error) {
//       console.log(error);
//       setPlanets([]);
//     }
//   }
//   useEffect(() => {
//     void apiCall();
//   }, []);

//   return (
//     <main className="text-black">
//       {planets.map((planets, index) => (
//         <div key={index}>
//           <p>{planets.name}</p>
//         </div>
//       ))}
//     </main>
//   );
// }
