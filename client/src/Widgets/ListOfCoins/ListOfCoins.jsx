import React, { useEffect, useState } from "react";
import styles from "./ListOfCoins.module.css";
import CoinsData from "../../app/coinsData/coinsData";
import CertainCoin from "../../entities/CertainCoin/CertainCoin";
import { observer } from "mobx-react-lite";

const ListOfCoins = ({paginationFlag, currectPage}) => {
  const [coinsArray, setCoinsArray] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const array = new CoinsData();
      await array.dataTake(currectPage);
      setCoinsArray(array.coinsArray);
      console.log(array.coinsArray);
    };
    fetchData();
    
  }, [paginationFlag]);

  return (
    <>
      <div className={styles.wrapper}>
        <span>Популярные монеты</span>
        <div className={styles.center}>
          <div className={styles.coinList}>
            {coinsArray.map((item, i) => (
              <CertainCoin key={i} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(ListOfCoins)
