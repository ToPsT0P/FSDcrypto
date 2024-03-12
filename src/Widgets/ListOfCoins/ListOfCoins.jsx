import { useState } from "react"
import styles from "./ListOfCoins.module.css"
import testPNG from "../../shared/img/gala.png"

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
                    <div className={styles.coin}>
                        <div className={styles.leftsideCoin}>
                            <img src={testPNG} alt="" />
                            <div className={styles.leftsideCoinText}>
                                <span>GALA</span>
                                <p>GALA</p>
                            </div>
                        </div>
                        <div className={styles.rightsideCoin}>
                            <div>
                                <p>Price to bitcoin:</p>
                                <span>0.0001123</span>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default ListOfCoins