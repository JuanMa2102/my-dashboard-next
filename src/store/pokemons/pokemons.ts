import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
    favorites: {[key: string]: SimplePokemon}
}

// const initialState : PokemonFavoriteState = {
    // '1': {id:"1",name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"}
// }

// const getInitialState = (): PokemonState => {
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}' );
//     return favorites;
// }

const initialState: PokemonState = {
    // ...getInitialState()
    favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
        state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
        const pokemon = action.payload
        const {id} = pokemon;

        if(!!state.favorites[id]){
            delete state.favorites[id];
        }else{
            state.favorites[id] = pokemon;
        }

        // localStorage.setItem('favorite-pokemons', JSON.stringify(state));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer