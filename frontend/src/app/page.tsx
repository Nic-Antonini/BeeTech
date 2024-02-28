import React from "react";
import Style from "./page.module.css";
import Logo from '../assets/img/logo.png'

export default () =>{
  return(
    <body className={Style.body}>
      
      <header className={Style.header}>

        <div className={Style.logoArea}>

        <img className={Style.logo} src={Logo.src} alt="" />

        </div>

        <nav className={Style.navbar}>

          <a href="#" className={Style.navObj}>Sobre nós</a>

          <a href="#" className={Style.navObj}>FAQ</a>

          <a href="#" className={Style.navObj}>

            <button className={Style.btnLogin}>
              Entrar
            </button>

          </a>

        </nav>

      </header>

      <main className={Style.main}>

      </main>

    </body>
  )
}