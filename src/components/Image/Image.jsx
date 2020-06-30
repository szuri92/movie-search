import React, { useState } from 'react'
import styles from './Image.module.scss'
import placeholder from '../assets/placeholder.jpg'

const basePath = 'http://image.tmdb.org/t/p/w342/'

const Image = ({ src , ...restProps}) => {
    const [ error, setError ] = useState(false)

    const getSrc = () => {
        return error ? placeholder: `${basePath}${src}`
    }

    return (
        <img className={styles.poster} src={getSrc()} onError={() => {setError(true) }} {...restProps} alt=''/>
    )

}

export default Image