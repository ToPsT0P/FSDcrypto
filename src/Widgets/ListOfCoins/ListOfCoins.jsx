import React, { useEffect, useMemo, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CertainCoin from "../../entities/CertainCoin/CertainCoin";

const ListOfCoins = ({setItem}) => {
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
