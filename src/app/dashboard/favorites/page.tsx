import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";


export const metadata = {
    title: 'Favoritos',  
    description: 'Listado de pokemons',
}

export default async function PokemonsPage() {
    // const pokemons = [];
  return (
    <div className="flex flex-col text-3xl">
        <span>Pókemons Favoritos <small className="text-blue-500">Global State</small></span>
        
        <FavoritePokemons />
    </div>
  ); 
}