import { SimplePokemon, PokemonsResponse } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async ( limit=20, offset=0):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());
    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
        url: pokemon.url
    }));
    return pokemons
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);
  return (
    <div>
        <h1>Pokemons</h1>
        
        <div className="flex flex-wrap gap-10 items-center justify-center">
            
            {
                pokemons.map( (pokemon) => (
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        key={pokemon.id}
                        alt={pokemon.name} 
                        width={100} 
                        height={100} 
                    />
                 ) )
            }
            
        </div>
    </div>
  ); 
}