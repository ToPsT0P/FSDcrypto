import { useState } from "react"
import styles from "./ListOfCoins.module.css"
import testPNG from "../../shared/img/gala.png"
import CertainCoin from "../../entities/CertainCoin/CertainCoin"

const ListOfCoins = () => {

    const [dataArray, setDataArray] = useState([
        {
           price: 9.875,
           name: "GALA" 
        },
        {
            price: 6.9876,
            name:"kimbo"
        },
        {
            price:4.1623,
            name: "DeepFakeAI"

        },
    ])

    return(
        <>
            <div className={styles.wrapper}>
                <span>Trending Coins</span>
                <div className={styles.coinList}>
                    <CertainCoin/>   
                    <CertainCoin/>
                    <CertainCoin/>
                </div>
                

            </div>
        </>
    )
}

export default ListOfCoins