import { useContext } from "react"
import ListOfCoins from "../../Widgets/ListOfCoins/ListOfCoins"
import WelcomeCard from "../../Widgets/WelcomeCard/WelcomeCard"
import Header from "../../Widgets/header/Header"
import styles from "./MainPage.module.css"


const MainPage = ({setIsModal, setItem}) => {

    return(

        <>
            <div className={styles.fullWidth}>
                <Header setIsModal={setIsModal}/>
                
            </div>
            <div className={styles.wrapper}>
                <WelcomeCard setIsModal={setIsModal}/>
                <ListOfCoins setItem={setItem}/>
            </div>
        
        </>
    )
}

export default MainPage