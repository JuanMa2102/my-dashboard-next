'use client'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { store } from './';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    // console.log('Providers - useEffect')
    const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') || '{}' );
    console.log({favorites})
    store.dispatch( {type: 'pokemons/setFavoritePokemons', payload: favorites} )
  }, [])

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
