import React from "react";
import {PokemonCard} from "@/components";

import { Pokemon } from "@/interfaces";

interface IPokemonList {
    pokemons: Pokemon[]
}

export function PokemonList({ pokemons }: IPokemonList) {
    return pokemons.map(({ id, name }: Pokemon) => (
        <PokemonCard key={id} id={id} name={name} />
    ))
}