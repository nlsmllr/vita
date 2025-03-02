'use client';

import { useEffect, useState } from 'react';

type Planet = { name: string; population: number };
type PlanetResponse = { results: Planet[] };

export default function Home() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  async function apiCall() {
    try {
      const response = await fetch('https://swapi.dev/api/planets/');
      if (!response.ok) {
        throw new Error('nope');
      }
      const data = (await response.json()) as PlanetResponse;
      setPlanets(data.results);
    } catch (error) {
      console.log('auch nope', error);
    }
  }
  useEffect(() => {
    apiCall().catch(error => {
      console.error('Failed to fetch planets:', error);
    });
  }, []);

  return (
    <main>
      {planets.map((planets, idx) => (
        <div key={idx}>
          <p>{planets.name}</p>
        </div>
      ))}
    </main>
  );
}
