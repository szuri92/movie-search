import { movies } from './reducers'
import * as actionTypes from './actionTypes'

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(
        {
            pendingRequest: false,
            movieList: [],
            hasMore: true,
            searchQuery: {
                query: '',
                page: 1,
            },
        }
        )
    })

    it('should handle ADD_TODO with reset', () => {
        expect(movies(undefined, {
            type: actionTypes.REQUEST_MOVIES,
            title: null,
            reset: true
        })
        ).toEqual(
            {
                pendingRequest: true,
                movieList: [],
                hasMore: true,
                searchQuery: {
                    query: '',
                    page: 1,
                },
            }
        )
    })

    it('should handle ADD_TODO without reset', () => {
        expect(movies({
            pendingRequest: true,
            movieList: ['test'],
            hasMore: true,
            searchQuery: {
                query: '',
                page: 1,
            },
        }, {
            type: actionTypes.REQUEST_MOVIES,
            title: null,
        })
        ).toEqual(
            {
                pendingRequest: true,
                movieList: ['test'],
                hasMore: true,
                searchQuery: {
                    query: '',
                    page: 2,
                },
            }
        )
    })

    it('should handle RECEIVE_MOVIES', () => {

        expect(movies({
            pendingRequest: true,
            movieList: ['movie1'],
            hasMore: true,
            searchQuery: {
                query: 'test',
                page: 3,
            },
        }, {
            type: actionTypes.RECEIVE_MOVIES,
            movieList: ['movie2', 'movie3'],
        })
        ).toEqual(
            {
                pendingRequest: false,
                movieList: ['movie1', 'movie2', 'movie3'],
                hasMore: true,
                searchQuery: {
                    query: 'test',
                    page: 3,
                },
            }
        )

        expect(movies({
            pendingRequest: true,
            movieList: [],
            hasMore: false,
            searchQuery: {
                query: 'test',
                page: 3,
            },
        }, {
            type: actionTypes.RECEIVE_MOVIES,
            movieList: new Array(20),
        })
        ).toEqual(
            {
                pendingRequest: false,
                movieList: new Array(20),
                hasMore: true,
                searchQuery: {
                    query: 'test',
                    page: 3,
                },
            }
        )
    })
     
})