import styles from "./AuthModal.module.css"
import emailPng from "../../../shared/img/emailPng.png"
import passwordPng from "../../../shared/img/passwordPng.png"
import { useState } from "react"

const AuthModal = ({isModal, setIsModal}) => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [checkUserPassword, setCheckUserPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)

    const userPasswordCheck = () => {
        if(isModal == "Auth" && userPassword == checkUserPassword){
            setErrorPassword(false)
            return
        }else{
            setErrorPassword(true)
            return
        }
    }

    const writingSecondPassword = (e) => {
        setCheckUserPassword(e.target.value)
        userPasswordCheck()
    }

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
                        <div className={styles.inputDiv}>
                            <img src={emailPng} alt="" />
                            <input type="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" />    
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
                            <input type="password" onChange={(e) => {writingSecondPassword(e)}} maxLength={20} placeholder="Password" />
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