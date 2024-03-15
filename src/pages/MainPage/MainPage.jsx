import { useState } from "react"
import ListOfCoins from "../../Widgets/ListOfCoins/ListOfCoins"
import WelcomeCard from "../../Widgets/WelcomeCard/WelcomeCard"
import Header from "../../Widgets/header/Header"
import styles from "./MainPage.module.css"

const MainPage = ({setIsModal}) => {


    return(

        <>
            <div className={styles.fullWidth}>
                <Header/>
            </div>
            <div className={styles.wrapper}>
                <WelcomeCard setIsModal={setIsModal}/>
                <ListOfCoins/>
            </div>
        
        </>
    )
}

export default MainPage