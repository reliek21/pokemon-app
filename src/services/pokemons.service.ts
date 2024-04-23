import { Pokemon, PokemonResponse, SinglePokemon } from "@/interfaces";
import {notFound} from "next/navigation";

export async function getPokemons(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    try {
        const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
            method: "GET",
            cache: "force-cache",
            next: {
                revalidate: 60 * 60 * 30 * 6,
            }
        })
          .then(res => res.json());

        return response.results.map((pokemon) => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }));
    } catch (error: unknown) {
        return notFound();
    }
}

export async function getPokemonsStatic(): Promise<{name: string}[]> {
    try {
        const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`, {
            method: "GET",
            cache: "force-cache",
        })
          .then(res => res.json());

        const staticPokemons = response.results.map((pokemon) => ({
            name: pokemon.name,
        }))

        return staticPokemons.map(({ name }) => ({ name: name }));
    } catch (error: unknown) {
        return notFound();
    }
}

export async function getPokemonId(name: string): Promise<SinglePokemon> {
    try {
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            method: "GET",
            cache: "force-cache",
        }).then(res => res.json());
    } catch (error: unknown) {
        return notFound();
    }
}

export async function getPokemonName(name: string): Promise<SinglePokemon> {
    try {
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            method: "GET",
            cache: "force-cache",
        }).then(res => res.json());
    } catch (error: unknown) {
        return notFound();
    }
}