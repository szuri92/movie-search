import React, { useCallback, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import MovieTile from '../MovieTile'
import Loader from '../Loader'
import ErrorBoundary from '../ErrorBoundary'

import { requestMovies } from '../../store/actionCreators'

import styles from './MovieList.module.scss'

const MovieList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies, shallowEqual)
    const { hasMore, pendingRequest, movieList } = movies

    const observer = useRef()
    const lastMovieRef = useCallback(node => {
        if(pendingRequest) {
            return
        }
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                dispatch(requestMovies())
            }
        })

        if(node) {
            observer.current.observe(node)
        }
    })

    return (
        <ErrorBoundary>
            <Loader enabled={pendingRequest}/>
            <section className={styles.main_view}>
                { movieList.map((movie, index) => {
                    if(movieList.length === index + 1) {
                        return ( <div key={movie.id} ref={lastMovieRef}><MovieTile movie={movie}/></div> )
                        } else {
                        return <MovieTile key={movie.id} movie={movie}/>
                        }
                }) }
            </section>
        </ErrorBoundary>
    )
}

export default MovieList

