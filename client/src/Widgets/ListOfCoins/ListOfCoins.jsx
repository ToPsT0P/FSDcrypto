import React, { useEffect, useMemo, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CertainCoin from "../../entities/CertainCoin/CertainCoin";

const ListOfCoins = ({setItem}) => {
    const [dataArray, setDataArray] = useState([
        {
            price: 9.875,
            name: "GALA",
            imgURL: "gala",
            cap: 4.6,
            currentMarket: 21002030,
            volume: 87654213,
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png",
             cap: 4.6,
             currentMarket: 21002030,
             volume: 87654213,
         },
         {
            price: 9.875,
            name: "GALA",
            imgURL: "gala",
            cap: 4.6,
            currentMarket: 21002030,
            volume: 87654213,
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png",
             cap: 4.6,
             currentMarket: 21002030,
             volume: 87654213,
         },
         {
            price: 9.875,
            name: "GALA",
            imgURL: "gala",
            cap: 4.6,
            currentMarket: 21002030,
            volume: 87654213,
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png",
             cap: 4.6,
             currentMarket: 21002030,
             volume: 87654213,
         },
         {
            price: 9.875,
            name: "GALA",
            imgURL: "gala",
            cap: 4.6,
            currentMarket: 21002030,
            volume: 87654213,
 
         },
         {
             price: 6.9876,
             name:"kimbo",
             imgURL: "gala.png",
             cap: 4.6,
             currentMarket: 21002030,
             volume: 87654213,
         },
         {
            price: 9.875,
            name: "GALA",
            imgURL: "gala",
            cap: 4.6,
            currentMarket: 21002030,
            volume: 87654213,
         },
    ]);

    const coinElements = useMemo(() => {
        return dataArray.map((item, i) => (
            <CertainCoin setItem={setItem} key={i} item={item} imgURL={item.imgURL} name={item.name} price={item.price} />
        ));
    }, [dataArray]);

    return (
        <>
            <div className={styles.wrapper}>
                <span>Trending Coins</span>
                <div className={styles.center}>
                    <div className={styles.coinList}>
                        {coinElements}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListOfCoins;
