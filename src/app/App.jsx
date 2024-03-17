import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import styles from "./absoluteStyles.module.css"
import AuthModal from "../features/Auth/AuthModal/AuthModal"

function App() {

  const [isModal, setIsModal] = useState("None")

  return (
    <div className={styles.wrapper}>
       <MainPage setIsModal={setIsModal}/>
       {isModal == "Auth" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
       {isModal == "Login" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
    </div>
  )
}

export default App
