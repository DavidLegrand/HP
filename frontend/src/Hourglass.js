import React from 'react'
import House from './House'
import styles from './Hourglass.module.css'

const Hourglass = ({ data }) => {
    return (
        <div className={styles.bg}>
            <div className={styles.hourglass}></div>
            { data && data.map((house, i) => <House house={house} key={i} />)}
            <div className={styles.highlights}></div>
        </div>
    )
}

export default Hourglass