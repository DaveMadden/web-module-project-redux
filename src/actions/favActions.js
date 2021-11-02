export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";

export const toggleFav = ()=>{
    console.log("toggleFav action called")
    return({type: TOGGLE_FAV});
}
export const addFav = (movie)=>{
    return ({type:ADD_FAV, payload:movie});
}
export const delFav = (movieID)=>{
    return ({type:DEL_FAV, payload:movieID});
}