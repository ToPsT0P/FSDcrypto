import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext, useEffect } from "react"
import { Context } from "../../main"
import { observer } from "mobx-react-lite"

const Header = ({ setIsModal }) => {
    const { store } = useContext(Context)

    useEffect(() => {
        store.checkAuth()
    }, [])

    const openModal = () => {
        setIsModal("Login")
        store.checkAuth()
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <span>
                        <Link to={"/"} className={styles.brandName}>CryptoWatch</Link>
                    </span>

                    {store.isAuth === true && <button className={styles.loginButton} onClick={() => store.logout}>Выход</button>}
                    {store.isAuth === false && <button className={styles.loginButton} onClick={openModal}>Вход</button>}
                </div>
            </div>
        </>
    )
}

export default observer(Header)
