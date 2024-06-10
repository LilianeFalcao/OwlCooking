import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Receitas.module.css"

const Receitas = ({ receitas }) => {
  const { id } = useParams()

  if (!Array.isArray(receitas)) {
    return <div>Receitas não disponíveis</div>
  }

  const receita = receitas.find(r => r.id === id)

  if (!receita) {
    return <div>Receita não encontrada</div>
  }

  return (
    <div className={styles.bodyCont}>
      <img className={styles.imgs} src={receita.imageUrl} alt={receita.title} />
      <h1>{receita.title}</h1>
      <h1>Ingredientes:</h1>
      <p className={styles.ingred}>{receita.desc}</p>
    </div>
  )
}

export default Receitas
