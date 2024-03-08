import Link from "next/link"
import styles from "./page.module.css"

export default function login(){

    return(
        <body className={styles.container}>
            
            <div className={styles.loginArea}>
            
                <div className={styles.areaBeekep}></div>
                <div className={styles.areaFarmer}></div>

            </div>
        </body>
    )
}