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
    <div style={{backgroundImage: `url(https://i.pinimg.com/564x/85/d2/88/85d28899a4b28f75e91500a772994e5c.jpg)`}}  className={styles.aff}>
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