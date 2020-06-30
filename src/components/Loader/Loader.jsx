import React from 'react'
import styles from './Loader.module.scss'

const Loader = ({enabled = false}) => {
    return (
        <div className={styles.loader}>
        { enabled &&
            <div className={styles.overlay}>
                <div className={styles.loader}></div>
            </div>
        }
    
        </div>
    )
}

export default Loader