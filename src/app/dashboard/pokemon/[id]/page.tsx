import { Pokemon } from "@/pokemons";
import { json } from "stream/consumers";


interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

const getPokemon = async(id: string) : Promise<Pokemon> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
    cache: 'force-cache'
  })
    .then(res => res.json());

  return data
}

export default async function PokemonPage(  {params} : Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return (
    <div>
      <h1>Pókemon: { id }</h1>
      <h2>{ JSON.stringify(pokemon, null, 2) }</h2>
    </div>
  );
}