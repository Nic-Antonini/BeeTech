"use client";
import React,{useLayoutEffect} from "react";
import Style from "./page.module.css";
import Logo from '../assets/img/logo.png';
import FarmerBeekeeper from '../assets/img/api-agri.svg';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';

export default () => {

  useLayoutEffect(()=>{
    gsap.to(`.${Style.ilustration}`, {
      duration: 1, x: 0, opacity: 1
    })
  }, [])

  return(

    <body className={Style.body}>
      
      <header className={Style.header}>

      <div className={Style.menu}>

          <div className={Style.logoArea}>

          <img className={Style.logo} src={Logo.src} alt="Logo do sistema BeeTech" />

          </div>

          <nav className={Style.navbar}>

            <a href="#" className={Style.navObj}>Sobre nós</a>

            <a href="#" className={Style.navObj}>FAQ</a>

            <a href="#" className={Style.navBtn}>

              <button className={Style.btnLogin}>
                Entrar
              </button>

            </a>

          </nav>

        </div>

        <div className={Style.contentMenu}>
          
          <h1 className={Style.pageDesc}>
          Unindo <span className={Style.span}> Criadores de Abelhas </span>
          e <span className={Style.span}> Produtores Rurais </span>
         Rumo a um Futuro <span className={Style.span}> Sustentável </span>
          e <span className={Style.span}>Tecnológico</span>.
          </h1>

          <img className={Style.ilustration} src={FarmerBeekeeper.src}
          alt="Uma ilustração de um homem agricultor com uma caixa de maçãs
          e uma mulher apicultora segurando um favo de abelha." />

        </div>

      </header>

      <main className={Style.main}>

      </main>

    </body>

  )
}