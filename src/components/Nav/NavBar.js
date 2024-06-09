import React from 'react'
import styles from "./NavBar.module.css"

//Link react pra navegação por react router
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const logOut = () => {
    //aqui tem a validação do token com a api q eu vou saber depois
    navigate("/")
  }

  return (
    <nav className={styles.navB}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/"> Login </Link>
            </li>
            <li className={styles.navItem}>
                <button className='btn btn-outline' onClick={() => {logOut()}}>LogOut</button>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar