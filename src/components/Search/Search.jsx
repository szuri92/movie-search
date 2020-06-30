import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import styles from './Search.module.scss'

import { requestMovies } from '../../store/actionCreators'

const Search = () => {
    const input = useRef()
    const dispatch = useDispatch()


    const searchForMovies = () => {
        const query = input.current.value
        dispatch(requestMovies(query, true))
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            searchForMovies()
        }
    }

    return (
        <section className={styles.search}>
            <input onKeyDown={handleKeyDown} className={styles.search_bar} type="text" ref={input} placeholder="Search for a movie..."/>
            <button onClick={searchForMovies}>Search</button>
        </section>
    )
}

export default Search
