import {Pokemon, PokemonResponse} from "@/interfaces";

export async function getPokemons(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    return response.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));
}