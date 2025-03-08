'use client';

import { useEffect, useState } from 'react';

type Planet = { name: string };
type PlanetsResponse = { result: Planet[] };

export default function Home() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  async function apiCall() {
    try {
      const response = await fetch('https://swapi.dev/api/planets');
      if (!response.ok) {
        throw new Error('nope');
      }
      const data = (await response.json()) as PlanetsResponse;
      setPlanets(data.result);
    } catch (error) {
      console.log(error);
      setPlanets([]);
    }
  }
  useEffect(() => {
    void apiCall();
  }, []);

  return (
    <main>
      {planets.map((planet, index) => (
        <div key={index}>
          <p>{planet.name}</p>
        </div>
      ))}
    </main>
  );
}
