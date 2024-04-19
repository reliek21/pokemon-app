export interface PokemonResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Array<Result>;
}

export interface Result {
    name: string;
    url:  string;
}

export interface Pokemon {
    id: string;
    name: string;
}