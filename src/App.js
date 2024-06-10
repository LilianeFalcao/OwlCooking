import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'
import Favoritos from "./pages/Fav/Favoritos"
import Receitas from "./pages/Recipe/Receitas"
import NovasReceitas from './pages/NewReciper/NovasReceitas'
import NotFoundPage from './pages/Error/NotFoundPage'
import { useFetch } from './hooks/useFetch'

const App = () => {

  const BaseUrl = "http://localhost:3000";
  const URLReceitas = "http://localhost:3000/receitas";

  const {dados: receitas} = useFetch(URLReceitas);

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Login BaseUrl={BaseUrl} />} />
          <Route path='/cadastro' element={ <Cadastro BaseUrl={BaseUrl} />} />
          <Route path='/home' element={ <Home 
            URLReceitas={URLReceitas}
            receitas={receitas}/>} />
          <Route path='/favoritos' element={ <Favoritos />} />
          <Route path='/receitas/:id' element={ <Receitas 
              URLReceitas={URLReceitas}
              receitas={receitas}/>} />
          <Route path='/novasReceitas' URLReceitas={URLReceitas} element={ <NovasReceitas />} />
          <Route path='*' element={ <NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
