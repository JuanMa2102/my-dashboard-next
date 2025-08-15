import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonFavoriteState {
    [key: string]: SimplePokemon
}

const initialState : PokemonFavoriteState = {
    '1': {id:"1",name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
        const pokemon = action.payload
        const {id} = pokemon;

        if(!!state[id]){
            delete state[id];
        }else{
            state[id] = pokemon;
        }
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer