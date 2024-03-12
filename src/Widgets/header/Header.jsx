import styles from "./Header.module.css"

const Header = () => {


    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    <span>
                        <a className={styles.brandName} href="">CryptoWatch</a>
                    </span>

                    <button className={styles.loginButton}>Вход</button>

                </div>
            </div>
        </>
    )
}

export default Header