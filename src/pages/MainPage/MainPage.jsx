import { useState } from "react"
import ListOfCoins from "../../Widgets/ListOfCoins/ListOfCoins"
import WelcomeCard from "../../Widgets/WelcomeCard/WelcomeCard"
import Header from "../../Widgets/header/Header"
import styles from "./MainPage.module.css"
import AuthModal from "../../features/Auth/AuthModal/AuthModal"

const MainPage = () => {

    const [isModal, setIsModal] = useState(true)

    return(

        <>
            {isModal && <AuthModal />}
            <div className={styles.fullWidth}>
                <Header/>
            </div>
            <div className={styles.wrapper}>
                <WelcomeCard/>
                <ListOfCoins/>
            </div>
        </>
    )
}

export default MainPage