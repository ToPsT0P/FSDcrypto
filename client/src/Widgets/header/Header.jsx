import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = ({setIsModal}) => {

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <span>
                        <Link to={"/"} className={styles.brandName}>CryptoWatch</Link>
                    </span>

                    <button className={styles.loginButton} onClick={() => {setIsModal("Login")}}>Вход</button>

                </div>
            </div>
        </>
    )
}

export default Header