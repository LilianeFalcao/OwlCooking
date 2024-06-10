import React from 'react'
import styles from "./NovasReceitas.module.css"
import useForm from '../../hooks/useForm'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const NovasReceitas = ({ URLReceitas }) => {
  const { httpConfig } = useFetch(URLReceitas)
  const navigate = useNavigate()
  const { form, onChangeInputs, clearInputs } = useForm({
    title: "",
    desc: "",
    imageUrl: "",
  })

  const AddReceita = async (e) => {
    e.preventDefault()

    const ReceitasDetails = {
      title: form.title,
      desc: form.desc,
      imageUrl: form.imageUrl,
    }

    httpConfig(ReceitasDetails, "POST")
    navigate("/home")
    clearInputs()
  }

  return (
    <div>
      <h1 className={styles.Hgs}>Adicione uma nova receita</h1>
      <form onSubmit={AddReceita}>
        <label>
          <span>Título:</span>
          <input 
            type="text" 
            value={form.title} 
            onChange={onChangeInputs} 
            placeholder="Adicione o título da sua receita" 
            name="title" 
          />
        </label>
        <label>
          <span>Url Imagem:</span>
          <input 
            type="text" 
            value={form.imageUrl} 
            onChange={onChangeInputs} 
            placeholder="Adicione a imagem por uma url" 
            name="imageUrl" 
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea 
            value={form.desc} 
            onChange={onChangeInputs} 
            placeholder="Adicione uma descrição da sua receita, separados por vírgulas, ex: ingredientes" 
            name="desc" 
          />
        </label>
        <button className="btn" >Adicionar Receita</button>
      </form>
    </div>
  )
}

export default NovasReceitas
