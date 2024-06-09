import React from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <h1>{receita.title}</h1>
      <p>{receita.desc}</p>
    </div>
  )
}

export default Receitas
