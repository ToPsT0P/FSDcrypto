import { useState } from "react"
import styles from "./ListOfCoins.module.css"
import testPNG from "../../shared/img/gala.png"
import CertainCoin from "../../entities/CertainCoin/CertainCoin"

const ListOfCoins = () => {

    const [dataArray, setDataArray] = useState([
        {
           price: 9.875,
           name: "GALA",
           imgURL: "gala"

        },
        {
            price: 6.9876,
            name:"kimbo",
            imgURL: "gala.png"
        },
        {
            price:4.1623,
            name: "DeepFakeAI",
            imgURL: "gala.png",
        },
        {
            price: 9.875,
            name: "GALA",
            imgURL: "gala.png"
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png"
         },
         {
             price:4.1623,
             name: "DeepFakeAI",
             imgURL: "gala.png",
         },
         {
            price: 9.875,
            name: "GALA",
            imgURL: "gala.png"
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png"
         },
         {
             price:4.1623,
             name: "DeepFakeAI",
             imgURL: "gala.png",
         },

    ])

    return(
        <>
            <div className={styles.wrapper}>
                <span>Trending Coins</span>
                <div className={styles.coinList}>
                    {dataArray.map((item, i) => { return <CertainCoin imgURL={item.imgURL} name={item.name} price={item.price}/>})}
                </div>
                

            </div>
        </>
    )
}

export default ListOfCoins