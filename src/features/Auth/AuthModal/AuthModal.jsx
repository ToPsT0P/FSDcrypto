import styles from "./AuthModal.module.css"
import emailPng from "../../../shared/img/emailPng.png"
import passwordPng from "../../../shared/img/passwordPng.png"
import { useEffect, useState } from "react"
import AuthPasswordCheck from "./AuthLogic/AuthPasswordCheck"
import AuthEmailCheck from "./AuthLogic/AuthEmailCheck"

const AuthModal = ({isModal, setIsModal}) => {

    //Создание и инициализация переменных собирающих данные о user
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [checkUserPassword, setCheckUserPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(true)
    const [errorEmail, setErrorEmail] = useState(false)

    //Создание функции отслеживающей верность пароля и почты
    const userDataCheck = () => {
        AuthPasswordCheck({setErrorPassword, isModal, userPassword, checkUserPassword})
        AuthEmailCheck({userEmail, setErrorEmail})
    }

    //Запуск функции проверки с каждым изменением полей
    useEffect(() => {
        userDataCheck()
    }, 
    [checkUserPassword, userPassword, userEmail])


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
                        <div className={styles.inputDivError}>
                            <div className={styles.inputDiv}  style={{width: "100%", marginBottom: "4px"}}>
                                <img src={emailPng} alt="" />
                                <input type="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" />    
                            </div>
                            {!errorEmail == true && <p className={styles.errorText}>Почта написана неправильно</p>}
                        </div>
                        <div className={styles.inputDivError}>
                            <div className={styles.inputDiv} style={{width: "100%", marginBottom: "4px"}}>
                                <img src={passwordPng} alt="" />
                                <input type="password" onChange={(e) => setUserPassword(e.target.value)} maxLength={20} placeholder="Password"/>
                            </div>
                            {errorPassword == true && <p className={styles.errorText}>Пароли не совпадают</p>}
                        </div>
                        {isModal == "Auth" 
                        && <div className={styles.inputDiv}>
                            <img src={passwordPng} alt="" />
                            <input type="password" onChange={(e) => {setCheckUserPassword(e.target.value)}} maxLength={20} placeholder="Password" />
                        </div> }
                    </div>

                    <div className={styles.buttonsField}>
                        <button 
                        onClick={() => setIsModal("None")}
                        style={{backgroundColor: "#FDD8E5", color: "#F31260"}}>Закрыть</button>
                        
                        <button onClick={() => console.log("")}>
                            {isModal == "Auth" && <>Зарегистрироваться</>}
                            {isModal == "Login" && <>Войти</>}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AuthModal