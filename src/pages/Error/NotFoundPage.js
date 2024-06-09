import React from 'react'
import { ErrorMain, StyledImg } from "./styles"
import notfound from "../../assets/notfound.png"
const NotFoundPage = () => {
  return (
    <ErrorMain>
      <h1>Error 404 </h1>  
      <p>Página não encontrada</p>
      <StyledImg src={notfound} alt="" />
    </ErrorMain>
  )
}

export default NotFoundPage