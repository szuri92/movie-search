import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './MovieTile.module.scss'

import Image from '../Image'

const MovieTile = ({ movie } = {}) => {
    const history = useHistory()

    const seeMovieDetails = () => {
        history.push(`/detail/${movie.id}`)
    }

    return (
        <div className={styles.movie_tile_box} onClick={seeMovieDetails}>
            <Image src={movie.poster_path}/>
            <h1 className={styles.title}>{ movie.title }</h1>
            <div className={styles.overview}>
                { movie.overview }
            </div>
        </div>
    )
}

export default MovieTile