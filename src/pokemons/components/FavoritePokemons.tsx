'use client'
import { PokemonGrid } from '@/pokemons'
import { useAppSelector } from '@/store'
import React from 'react'

export const FavoritePokemons = () => {
    
  const pokemons = useAppSelector(state => state.pokemons );
  const pokeArray = Object.values(pokemons);
  console.log(pokeArray);
  return (
    <PokemonGrid pokemons={ pokeArray } />
  )
}
