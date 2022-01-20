const defaultState = {
    movies: []
}

export const SET_MOVIES = "SET_MOVIES"
export const FETCH_MOVIES = "FETCH_MOVIES"

export default function movieReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_MOVIES:
            return {...state, movies: action.payload}
    }
    return state
}

export const setMovies = payload => ({type: SET_MOVIES, payload})
export const fetchMovies = query => ({type: FETCH_MOVIES, query})
