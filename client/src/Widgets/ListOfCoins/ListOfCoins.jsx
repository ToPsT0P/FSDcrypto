import React, { useEffect, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CoinsData from "../../app/coinsData/coinsData";

const ListOfCoins = ({ setItem }) => {
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
          <div id="coinListId" className={styles.coinList}></div>
        </div>
      </div>
    </>
  );
};

export default ListOfCoins;
