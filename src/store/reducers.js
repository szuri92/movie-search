import { combineReducers } from 'redux'
import {
    RECEIVE_MOVIES,
    REQUEST_MOVIES,
} from './actionTypes'

const pageSize = 20

const initialState = {
    pendingRequest: false,
    movieList: [],
    hasMore: true,
    searchQuery: {
        query: '',
        page: 1,
    },
}

export const movies = (state = initialState, { type, title, reset, movieList }) => {
    switch(type) {
        case REQUEST_MOVIES:
            const pageQuery = reset ? 1 : state.searchQuery.page + 1
            const searchQuery =  title || state.searchQuery.query
            return {
                ...state,
                searchQuery: {
                    query: searchQuery,
                    page: pageQuery,
                },
                movieList: reset? [] : [...state.movieList],
                pendingRequest: true,
            }

        case RECEIVE_MOVIES:
            return {
                ...state,
                movieList: [...state.movieList, ...movieList],
                pendingRequest: false,
                hasMore: !(movieList < pageSize),
            }

        default: 
            return state
    }
}

const rootReducer = combineReducers({
    movies,
})

export default rootReducer