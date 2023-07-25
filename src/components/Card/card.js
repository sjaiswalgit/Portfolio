import React from 'react'
import styles from './styles.module.css'
export default function Card(props){
    return(
        <div className={`${styles.card} ${props.className}`}>
            {props.render()}
        </div>
    )
}