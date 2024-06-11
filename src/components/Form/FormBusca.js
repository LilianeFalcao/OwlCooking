import React from 'react';
import styles from './FormBusca.module.css';
import { useNavigate } from 'react-router-dom';

const FormBusca = ({search, setSearch}) => {
    
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        navigate("/search?q=" + search);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.SearchContainer } >
            <label className={styles.LabelInput}>
                <input className={styles.Inputs}
                    type="text"
                    name='search'
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)}
                    placeholder='Faça sua busca'/>
            </label>
            <button className={styles.buttonBusca} type='submit' value="buscar">Search</button>
        </form>
    </div>
  )
}

export default FormBusca