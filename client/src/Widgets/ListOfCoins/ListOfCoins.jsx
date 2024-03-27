import React, { useEffect, useMemo, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CertainCoin from "../../entities/CertainCoin/CertainCoin";
import CoinsData from "../../app/coinsData/coinsData";

const ListOfCoins = ({setItem}) => {
   
    const dataArray = new CoinsData();
    
    const coinElements = useMemo(() => {
        return dataArray.coinsArray.map((item, i) => (
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
