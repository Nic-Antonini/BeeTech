"use client";
import Link from "next/link";
import {useLayoutEffect, useRef} from "react";
import Style from "./page.module.css";
import Logo from '../assets/img/logo.png';
import FarmerBeekeeper from '../assets/img/api-agri.svg';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';

export default () => {

  useLayoutEffect(()=>{
    gsap.to(`.${Style.ilustration}`, {
      duration: 1, x: 0, opacity: 1, 
    })
  }, []);

  useLayoutEffect(()=>{
    gsap.to(`.${Style.pageDesc}`, {
      duration: 2, opacity: 1
    })
  }, []);

  const popUp = useRef<HTMLDialogElement>(null);
  
  const togglePopup = () => {
    if(popUp.current){
      popUp.current.showModal()
    }
  }
  

  return(

    <body className={Style.container}>
      
      <header className={Style.header}>

      <div className={Style.menu}>

          <div className={Style.logoArea}>

          <img className={Style.logo} src={Logo.src} alt="Logo do sistema BeeTech" />

          </div>

          <nav className={Style.navbar}>

            <Link href="" className={Style.navObj}>Sobre Nós</Link>

            <Link href="#" className={Style.navObj}>FAQ</Link>

              <button onClick={togglePopup} className={Style.btnLogin}>
                Entrar
              </button>
          
            <dialog className={Style.popUp} ref={popUp}>

              <div className={Style.contentPopup}>

                <button onClick={() => {popUp.current ? popUp.current.close() : null}} className={Style.popupClose}>&times;</button>

                <p className={Style.popupText}>Deseja entrar como:</p>

                <div className={Style.links}>

                  <Link href="/beekeeperEnter" className={Style.popupLink}>Apicultor</Link>
                  <Link href="/farmerEnter" className={Style.popupLink}>Agricultor</Link>

                </div>

              </div>

            </dialog>
          
          

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