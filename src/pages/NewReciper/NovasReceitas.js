import React from 'react';
import styles from "./NovasReceitas.module.css";
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const NovasReceitas = () => {
  
  const navigate = useNavigate();
  const URLReceitas = "http://localhost:3000/receitas";

  const { form, onChangeInputs, clearInputs } = useForm({
    title: "",
    desc: "",
    imageUrl: "",
  });

  const addReceita = async (e) => {
    e.preventDefault();

    const receitaDetails = {
      title: form.title,
      desc: form.desc,
      imageUrl: form.imageUrl,
    };

    try {
      const response = await fetch(`${URLReceitas}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receitaDetails),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao adicionar a receita');
      }

      const newReceita = await response.json();
      console.log('Receita adicionada com sucesso', newReceita);

      clearInputs();
      navigate("/home");
    } catch (error) {
      console.log('Erro ao adicionar receita:', error.message);
    }
  };

  return (
    <div>
      <h1 className={styles.Hgs}>Adicione uma nova receita</h1>
      <form onSubmit={addReceita}>
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
        <button className="btn">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default NovasReceitas;
