import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
} from './actionTypes'

export const requestMovies = (title = null, reset = false) => ({
    type: REQUEST_MOVIES,
    title,
    reset,
})

export const receiveMovies = (movieList) => ({
    type: RECEIVE_MOVIES,
    movieList,
})