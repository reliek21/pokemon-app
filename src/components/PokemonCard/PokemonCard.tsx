import React from "react";
import Image from "next/image";

interface IPokemonCard {
    id: string;
    name: string;
}

export function PokemonCard({ id, name }: IPokemonCard) {
    const upperLetter: string = name[0].toUpperCase();
    const joinLetter: string = upperLetter + name.slice(1, name.length);

    return (
        <div style={{ height: 300 }}
             className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                 style={{transform: 'scale(1.5)', opacity: 0.1}}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                      fill="white"/>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>
            <div className="relative h-32 pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                     style={{
                         background: 'radial-gradient(black, transparent 60%)',
                         transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2'
                     }}></div>

                <Image width={100} height={200} priority={false} className="relative w-40 mt-20 h-32"
                       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                       alt={name}  />


            </div>
            <div className="relative text-white px-6 pb-6 mt-24">
                <span className="block opacity-75 -mb-1">Indoor</span>
                <div className="flex justify-between">
                    <span className="block font-semibold text-xl">{joinLetter}</span>
                    <button className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">Like</button>
                </div>
            </div>
        </div>
    );
}