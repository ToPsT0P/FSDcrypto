import { useContext, useState } from "react"
import ListOfCoins from "../../Widgets/ListOfCoins/ListOfCoins"
import WelcomeCard from "../../Widgets/WelcomeCard/WelcomeCard"
import Header from "../../Widgets/header/Header"
import styles from "./MainPage.module.css"
import { observer } from "mobx-react-lite"
import Pagination from "../../Widgets/pagination/Pagination"


const MainPage = ({setIsModal}) => {

    const [paginationFlag, setPaginationFlag] = useState(true)
    const [currectPage, setCurrectPage] = useState(1)
    return(

        <>
            <div className={styles.fullWidth}>
                <Header setIsModal={setIsModal}/>
                
            </div>
            <div className={styles.wrapper}>
                <WelcomeCard setIsModal={setIsModal}/>
                <ListOfCoins currectPage={currectPage} paginationFlag={paginationFlag}/>
                <Pagination setCurrectPage={setCurrectPage} paginationFlag={paginationFlag} setPaginationFlag={setPaginationFlag}/>
            </div>
            <div className={styles.paginationDiv}>
            </div>
        
        </>
    )
}

export default observer(MainPage)