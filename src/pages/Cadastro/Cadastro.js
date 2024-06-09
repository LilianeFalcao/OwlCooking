import React from 'react'
import useForm from '../../hooks/useForm'
import styles from "./Cadastro.module.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Cadastro = ({ BaseUrl }) => {

  const { form, onChangeInputs, clearInputs } = useForm({
    nickName: "",
    email: "",
    senha: "",
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nickName || !form.email || !form.senha) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    let user = {
      nickName: form.nickName,
      email: form.email,
      senha: form.senha,
    }

    fetch( `${BaseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
        
      })
      .then((newUser) => {
        toast.success("Registrado com sucesso" + newUser)
        clearInputs();
        navigate("/");
      })
      .catch((error) => {
        alert("Algo deu errado: " + error.message);
      });
  };


  return (
    <div>
      <h1 className={styles.hgs}>Cadastro</h1>
      <p className={styles.Pe}>Cadastre-se e compartilhe suas receitas</p>
      <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
                <span>Apelido/Nome: </span>
                <input 
                    type="text" 
                    name="nickName" 
                    value={form.nickName}
                    onChange={onChangeInputs}
                    placeholder='Digite seu apelido/nome'
                    />
            </label>
            <label htmlFor='email'>
                <span>E-mail: </span>
                <input 
                    type="text" 
                    name="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder='Digite seu e-mail'
                    />
            </label>
            <label>
                <span>Senha: </span>
                <input 
                    type="password" 
                    name="senha"
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder='Digite sua senha'
                    />
            </label>
            <button className='btn'> Cadastre-se </button>
      </form>
    </div>
  )
}

export default Cadastro