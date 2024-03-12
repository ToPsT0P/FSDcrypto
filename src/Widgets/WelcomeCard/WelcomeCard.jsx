import styles from "./WelcomeCard.module.css"

const WelcomeCard = () => {

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <span>Привет, незнакомец</span>
                </div>
                <div className={styles.buttons}>
                    <span  className={styles.boldText}>Сделайте свои первые инвестиции уже сегодня</span><br />
                    <button className={styles.button} style={{backgroundColor: "white", color:"blue"}}>
                        Вход
                    </button>
                    <button  className={styles.button}>
                        Регистрация
                    </button>
                </div>
            </div>  
        </>
    )
}

export default WelcomeCard