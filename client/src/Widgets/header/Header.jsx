import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext, useEffect } from "react"
import { Context } from "../../main"

const   Header = ({setIsModal}) => {

    const {store} = useContext(Context)
    
        const logFun = () => {
            store.logout()
        }
    
        const openModal = () => {
            setIsModal("Login")
        }

    useEffect(() => {
        store.checkAuth()
    }, [logFun, openModal])
    

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <span>
                        <Link to={"/"} className={styles.brandName}>CryptoWatch</Link>
                    </span>

                    {store.isAuth == false && <button className={styles.loginButton} onClick={() => {openModal()}}>Вход</button>}
                    {store.isAuth == true && <button className={styles.loginButton} onClick={() => {logFun()}}>Выход</button>}
                </div>
            </div>
        </>
    )
}

export default Header