import { useState } from 'react'
import MainPage from '../pages/MainPage/MainPage'
import styles from "./absoluteStyles.module.css"
import AuthModal from "../features/Auth/AuthModal/AuthModal"
import { Route, Routes } from 'react-router-dom'
import CurrentCoin from '../pages/CurrentCurency/CurrentCoin'

function App() {

  const [isModal, setIsModal] = useState("None")


  return (
    <div className={styles.wrapper}>
       {isModal == "Auth" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
       {isModal == "Login" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
       <Routes>
        <Route path="/" element={<MainPage setIsModal={setIsModal}/>} />
        <Route path="/Coin" element={<CurrentCoin/>} />
       </Routes>
    </div>
  )
}

export default App
