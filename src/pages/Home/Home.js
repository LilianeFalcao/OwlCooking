import React from 'react'
import styles from "./Home.module.css"
import Card from '../../components/ReceitasCard/Card'
import { useNavigate } from 'react-router-dom'

const Home = ({receitas}) => {
  const navigate = useNavigate();
  
  const formAddReceita = () =>{
    navigate("/novasReceitas");
  }
  return (
    <div className={styles.aff}>
      <article className={styles.containerHome}>
        <Card  
          receitas={receitas}
          navigate={navigate}
        />
        <button onClick={()=> {formAddReceita()}} className={styles.addButton}> + </button>
      </article> 
    </div>
  )
}

export default Home