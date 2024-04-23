import React from "react";
import { getPokemons } from "@/services";
import { PokemonList } from "@/components";

export default async function Home(): Promise<React.ReactElement> {
    const pokemons = await getPokemons(151);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="flex flex-wrap items-center justify-center">
              <PokemonList  pokemons={pokemons}/>
          </div>
      </main>
  );
}
