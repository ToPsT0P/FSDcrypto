import React, { useEffect, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CoinsData from "../../app/coinsData/coinsData";
import CertainCoin from "../../entities/CertainCoin/CertainCoin";

const ListOfCoins = () => {
  const [coinsArray, setCoinsArray] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const array = new CoinsData();
      await array.dataTake();
      setCoinsArray(array.coinsArray);
    };
    fetchData();
    
  }, []);



  return (
    <>
      <div className={styles.wrapper}>
        <span>Trending Coins</span>
        <div className={styles.center}>
          <div className={styles.coinList}>
            {coinsArray.map((item, i) => (
              <CertainCoin key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfCoins;
