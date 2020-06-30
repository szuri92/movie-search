import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import styles from './MovieDetails.module.scss'

import ErrorBoundary from '../ErrorBoundary'
import Image from '../Image'

const MovieDetail = () => {
    const { id }  = useParams()
    const history = useHistory()

    const movie = useSelector(state => state.movies.movieList.filter(e => e.id == id))[0]

    //TODO: request movie by id if it's not yet in the store

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <ErrorBoundary>
            <section className={styles.detail_page}>
                <div>
                    <span className={styles.goBack} onClick={handleGoBack}> ◄ Back</span>
                    <h1>{ movie.title }</h1>
                    <h2>{ movie.release_date } </h2>
                    <h2>{ movie.popularity }</h2>
                    <div className={styles.overview}>{ movie.overview }</div>
                </div>
                <Image src={movie.poster_path}/>
            </section>
        </ErrorBoundary>
    )
}

export default MovieDetail