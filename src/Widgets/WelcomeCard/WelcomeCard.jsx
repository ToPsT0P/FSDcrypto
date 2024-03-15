import styles from "./WelcomeCard.module.css"

const WelcomeCard = ({setIsModal}) => {

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <span>Привет, незнакомец</span>
                </div>
                <div className={styles.buttons}>
                    <span  className={styles.boldText}>Сделайте свои первые инвестиции уже сегодня</span><br />
                    <button 
                    className={styles.button} 
                    style={{backgroundColor: "white", color:"blue"}}
                    onClick={() => {setIsModal("Login")}}>
                        Вход
                    </button>
                    <button  
                    onClick={() => {setIsModal("Auth")}}
                    className={styles.button}>
                        Регистрация
                    </button>
                </div>
            </div>  
        </>
    )
}

export default WelcomeCard