import { useContext, useEffect, useState } from "react"
import AuthPasswordCheck from "./AuthLogic/AuthPasswordCheck"
import AuthEmailCheck from "./AuthLogic/AuthEmailCheck"
import { Context } from "../../../main"
import styles from "./AuthModal.module.css"
import emailPng from "../../../shared/img/emailPng.png"
import passwordPng from "../../../shared/img/passwordPng.png"

const AuthModal = ({ isModal, setIsModal }) => {
    const { store } = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkpassword, setCheckpassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(true)
    const [errorEmail, setErrorEmail] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const userDataCheck = () => {
        AuthPasswordCheck({ setErrorPassword, isModal, password, checkpassword })
        AuthEmailCheck({ email, setErrorEmail })
    }

    const regFun = () => {
        setIsLoading(true)
        store.registration(email, password)
            .then(() => {
                setIsModal("None")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const logFun = () => {
        setIsLoading(true)
        store.login(email, password)
            .then(() => {
                setIsModal("None")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        userDataCheck()
    }, [checkpassword, password, email])

    return (
        <div className={styles.wrapper} onClick={() => setIsModal("None")}>
            <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.textsField}>
                    {isModal === "Auth"
                        ? <p>Регистрация нового бро</p>
                        : <p>Вход старого бро</p>}

                    <span>CryptoWatch</span>
                </div>

                <div className={styles.inputsField}>
                    <div className={styles.inputDivError}>
                        <div className={styles.inputDiv} style={{ width: "100%", marginBottom: "4px" }}>
                            <img src={emailPng} alt="" />
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        {!errorEmail && <p className={styles.errorText}>Почта написана неправильно</p>}
                    </div>
                    <div className={styles.inputDivError}>
                        <div className={styles.inputDiv} style={{ width: "100%", marginBottom: "4px" }}>
                            <img src={passwordPng} alt="" />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} maxLength={20} placeholder="Password" />
                        </div>
                        {errorPassword && <p className={styles.errorText}>Пароли не совпадают</p>}
                    </div>
                    {isModal === "Auth" &&
                        <div className={styles.inputDiv}>
                            <img src={passwordPng} alt="" />
                            <input type="password" onChange={(e) => { setCheckpassword(e.target.value) }} maxLength={20} placeholder="Password" />
                        </div>}
                </div>

                <div className={styles.buttonsField}>
                    <button
                        onClick={() => setIsModal("None")}
                        style={{ backgroundColor: "#FDD8E5", color: "#F31260" }}>Закрыть</button>

                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            {isModal === "Auth" && <button onClick={regFun}>Зарегистрироваться</button>}
                            {isModal === "Login" && <button onClick={logFun}>Войти</button>}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthModal
