import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import styles from "./absoluteStyles.module.css"


function App() {

  return (
    <div className={styles.wrapper}>
      <MainPage/>
    </div>
  )
}

export default App
