import styles from "./Header.module.css"

const Header = ({setIsModal}) => {

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <span>
                        <a className={styles.brandName} href="">CryptoWatch</a>
                    </span>

                    <button className={styles.loginButton} onClick={() => {setIsModal("Login")}}>Вход</button>

                </div>
            </div>
        </>
    )
}

export default Header