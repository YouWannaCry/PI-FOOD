import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

export default function LandingPage(){
    
    return(
        <div className={styles.landing}>
            <h1 className={styles.h1}>Bienvenidos a mi Henry App</h1>
            <Link to ='/home' className={styles.link}>
                <button className={styles.button}><span className={styles.span}> Ingresar</span></button>
            </Link>
        </div>
    )
}