import React from "react";
import Image from "next/image";
import {Pokemon, PokemonResponse} from "@/interfaces/pokemon.interface";

const getPokemons = async (limit = 20, offset = 0): Promise<Array<Pokemon>> => {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

    const pokemons = response.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))



    return pokemons;
}

export default async function Home(): Promise<React.ReactElement> {
    const pokemons = await getPokemons(151);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="p-24 flex flex-wrap items-center justify-center">
              {
                  pokemons.map((pokemon) => (
              <div key={pokemon.id} style={{ height: 300 }} className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                  <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                       style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                      <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                            fill="white"/>
                      <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                  </svg>
                  <div className="relative h-32 pt-10 px-10 flex items-center justify-center">
                      <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                           style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2'}}></div>

                          <img className="relative w-40 mt-20 h-32"
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                          alt=""/>


                  </div>
                  <div className="relative text-white px-6 pb-6 mt-24">
                      <span className="block opacity-75 -mb-1">Indoor</span>
                      <div className="flex justify-between">
                          <span className="block font-semibold text-xl">Peace Lily</span>
                          <span
                              className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                      </div>
                  </div>
              </div>
                  ))
              }

              {/*<div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">*/}
              {/*    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"*/}
              {/*         style="transform: scale(1.5); opacity: 0.1;">*/}
              {/*        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"*/}
              {/*              fill="white"/>*/}
              {/*        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>*/}
              {/*    </svg>*/}
              {/*    <div className="relative pt-10 px-10 flex items-center justify-center">*/}
              {/*        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"*/}
              {/*             style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>*/}
              {/*        <img className="relative w-40"*/}
              {/*             src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"*/}
              {/*             alt=""/>*/}
              {/*    </div>*/}
              {/*    <div className="relative text-white px-6 pb-6 mt-6">*/}
              {/*        <span className="block opacity-75 -mb-1">Outdoor</span>*/}
              {/*        <div className="flex justify-between">*/}
              {/*            <span className="block font-semibold text-xl">Monstera</span>*/}
              {/*            <span*/}
              {/*                className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              {/*<div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">*/}
              {/*    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"*/}
              {/*         style="transform: scale(1.5); opacity: 0.1;">*/}
              {/*        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"*/}
              {/*              fill="white"/>*/}
              {/*        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>*/}
              {/*    </svg>*/}
              {/*    <div className="relative pt-10 px-10 flex items-center justify-center">*/}
              {/*        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"*/}
              {/*             style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>*/}
              {/*        <img className="relative w-40"*/}
              {/*             src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"*/}
              {/*             alt=""/>*/}
              {/*    </div>*/}
              {/*    <div className="relative text-white px-6 pb-6 mt-6">*/}
              {/*        <span className="block opacity-75 -mb-1">Outdoor</span>*/}
              {/*        <div className="flex justify-between">*/}
              {/*            <span className="block font-semibold text-xl">Oak Tree</span>*/}
              {/*            <span*/}
              {/*                className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

          </div>
      </main>
  );
}
