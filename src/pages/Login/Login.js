import React from 'react'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import styles from "./Login.module.css"
import { toast } from 'react-toastify'

const Login = ({ BaseUrl }) => {

  const navigate = useNavigate();  

  const {form, onChangeInputs, clearInputs} = useForm({
    email: "",
    senha: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const authenti = async () => {
      try {
        const response = await fetch(`${BaseUrl}/users`);
        if (!response.ok) {
          throw new Error('Erro na requisiçã' + response.statusText);
        }
  
        const users = await response.json();
        const user = users.find(user => user.email === form.email && user.senha === form.senha);
  
        if (user) {
          clearInputs();
          toast.success("Registrado com sucesso")
          navigate("/home");
        } else {
          alert("Email ou senha incorretos.");
        }
      } catch (error) {
        alert("Algo deu errado: " + error.message);
      }
    };
  
    authenti();
  }

  const irCadastro = () => {
    navigate("/cadastro")
  }
  
  return (
    <div>
        <h1 className={styles.hgs}>Login</h1>
        <p className={styles.Pe}>Faça login e compartilhe suas receitas</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
                <span>E-mail: </span>
                <input 
                    type="text" 
                    name="email" 
                    required
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
            <div className={styles.DivButtion}>
              <button className='btn'>Login</button>
              <button onClick={irCadastro} className='btn'>Cadastro</button>
            </div>
        </form>
    </div>
  )
}

export default Login