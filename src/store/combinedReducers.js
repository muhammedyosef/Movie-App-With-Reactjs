import { combineReducers } from "redux";
import favoritsReducer from "./reducers/favorits";
import moviesReducer from "./reducers/movies";


export default combineReducers({
    favorits: favoritsReducer,
    movies: moviesReducer,
})