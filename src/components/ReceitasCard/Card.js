import React from 'react'
import styles from "./Card.module.css"
import {CursosContainer } from './Roubo'
 
const Card = ({receitas, navigate}) => {
    
  return (
    <CursosContainer>
        <ul className={styles.US}>
            {receitas && receitas.map((recei) => (
                <li onClick={() => {navigate(`/receitas/${recei.id}`)}} 
                    className={styles.Lis} 
                    key={recei.id}>
                    <p><img src={recei.imageUrl} alt={recei.title} /></p>
                    <h1>{recei.title}</h1>
                </li>
            ))}
        </ul>
    </CursosContainer>
  )
}

export default Card