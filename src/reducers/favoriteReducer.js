import { TOGGLE_FAV, ADD_FAV, DEL_FAV } from '../actions/favActions.js';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_FAV:
            console.log("TOGGLE_FAV case called")
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DEL_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(movie=>(action.payload !== movie.id))
            }
        default:
            return state;
    }
}

export default reducer;