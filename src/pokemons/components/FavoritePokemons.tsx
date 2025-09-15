'use client'
import { PokemonGrid } from '@/pokemons'
import { useAppSelector } from '@/store'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
    
  const favoritePokemons = useAppSelector(state => state.pokemons.favorites );
  const [pokemons, setPokemons] = useState(favoritePokemons);
  // console.log(pokemons);

  useEffect(() => {
    setPokemons(favoritePokemons);
  }, [favoritePokemons])

  return (
    <>
    {
      Object.values(pokemons).length === 0
      ? (<NoFavorites />)
      : (<PokemonGrid pokemons={ Object.values(pokemons)} />)
    }
    </>
  )
}


export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] justify-center items-center">
          < IoHeartOutline size={100} color="gray" />
          <span className="text-2xl mt-5">No hay favoritos</span>
        </div>
    )
}