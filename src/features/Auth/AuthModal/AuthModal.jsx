import styles from "./AuthModal.module.css"

const AuthModal = ({isModal, setIsModal}) => {

    return(
        <>
            <div className={styles.wrapper} onClick={(e) => setIsModal("None")}>
                <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.textsField}>
                        {isModal == "Auth" 
                        ? <p>Регистрация нового бро</p>
                        : <p>Вхождение старого бро</p> }

                        <span>CryptoWatch</span>
                    </div>
                    
                    <div className={styles.inputsField}>
                        <input type="text" />
                        <input type="text" />
                        {isModal == "Auth" && <input type="text" />}
                    </div>

                    <div className={styles.buttonsField}>
                        <button>Закрыть</button>
                        
                        <button>
                            {isModal == "Auth" && <>Авторизироваться</>}
                            {isModal == "Login" && <>Войти</>}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AuthModal