import ListOfCoins from "../../Widgets/ListOfCoins/ListOfCoins"
import WelcomeCard from "../../Widgets/WelcomeCard/WelcomeCard"
import Header from "../../Widgets/header/Header"
import styles from "./MainPage.module.css"

const MainPage = () => {

    return(

        <>
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