import React from 'react'
import styles from './House.module.css'

const House = ({ house: { name, points } }) => {
    const min = 77
    const max = 419
    return (<>
        <div className={[styles.house, styles[name]].join(' ')}>
            <div className={styles.top}></div>
            <div className={styles.bar} style={{ height: `calc(${points}px * (${max} - ${min}) / 1000 + ${min}px)` }} ></div>
            {/* <div className={[styles.logo, styles[name]].join(' ')}></div> */}
        </div>
        <div className={[styles.ring, styles[name]].join(' ')} style={{ bottom: `calc(6.5vh + ${points}px * (${max} - ${min}) / 1000 + ${min}px)` }}>
            <div className={styles.logo} />
            <span>{points}</span>
        </div>
    </>)
}

export default House