
import {put, takeEvery, call} from "redux-saga/effects";
import { FETCH_MOVIES, setMovies } from "../store/movieReducer";




const fetchMoviesFromApi = (query) => fetch(query);

function* fetchMovieWorker(action) {
    const data = yield call(fetchMoviesFromApi, action.query )
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setMovies(json))
}

export function* movieWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMovieWorker)
}