import React from 'react'
import styles from './House.module.css'

const House = ({ house: { name, points } }) => {
    const min = 80
    const max = 450
    return (<>
        <div className={[styles.house, styles[name]].join(' ')}>
            <div className={styles.top}></div>
            <div className={styles.bar} style={{ height: `calc(8vh + ${points}vh * 0.08 * 0.48)` }} ></div>
            {/* <div className={[styles.logo, styles[name]].join(' ')}></div> */}
        </div>
        <div className={[styles.ring, styles[name]].join(' ')} style={{ bottom: `calc(17vh + ${points}vh * 0.08 * 0.47)` }}>
            <div className={styles.logo} />
            <span>{points}</span>
        </div>
    </>)
}

export default House