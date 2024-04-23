import { Pokemon, PokemonResponse, SinglePokemon } from "@/interfaces";

export async function getPokemons(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`, {
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
}

export async function getPokemonId(id: string): Promise<SinglePokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method: "GET",
        cache: "force-cache",
    }).then(res => res.json());

    console.log(response)

    return response;
}