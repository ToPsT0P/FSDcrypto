import { useContext, useEffect, useState } from 'react'
import MainPage from '../pages/MainPage/MainPage'
import styles from "./absoluteStyles.module.css"
import AuthModal from "../features/Auth/AuthModal/AuthModal"
import { Route, Routes } from 'react-router-dom'
import CurrentCoin from '../pages/CurrentCurency/CurrentCoin'
import { Context } from '../main'
import { observer } from 'mobx-react-lite'

function App() {

  const [isModal, setIsModal] = useState("None")
  const [item, setItem] = useState()
  const {store} = useContext(Context)

  return (
    <div className={styles.wrapper}>
       {isModal == "Auth" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
       {isModal == "Login" && <AuthModal isModal={isModal} setIsModal={setIsModal}/>}
       <Routes>
        <Route path="/" element={<MainPage setItem={setItem} setIsModal={setIsModal}/>} />
        {/* <Route path="/Coin" element={<CurrentCoin item={item} setIsModal={setIsModal}/>} /> */}
       </Routes>
    </div>
  )
}

export default observer(App)
