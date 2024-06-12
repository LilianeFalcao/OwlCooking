import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import styles from "./Search.module.css"

const Search = () => {
    const [searchParams] = useSearchParams()

    const urlSearch = "http://localhost:3000/receitas?" + searchParams;

    const { dados: receitas, loading, error } = useFetch(urlSearch);

    return (
        <div>
            <h1 className={styles.titulo}>Resultado da busca</h1>
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            <ul className={styles.US}>
                {receitas && receitas.map((receita) => (
                    <li className={styles.Lis} key={receita.id}>
                        <img src={receita.imageUrl} alt={receita.title} />
                        <h2>{receita.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search
