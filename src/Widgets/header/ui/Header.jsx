import styles from "../styles.module.css"

const Header = () => {


    return(
        <>
            <div className={styles.wrapper}>
                <span>
                    <a className={styles.brandName} href="">CryptoWatch</a>
                </span>

                <button className={styles.loginButton}>Вход</button>
            </div>
        </>
    )
}

export default Header