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
            </div>
        </>
    )
}

export default MainPage