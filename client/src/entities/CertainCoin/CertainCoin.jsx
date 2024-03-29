import styles from "./CertainCoin.module.css"
import plus from "../../shared/img/plus.svg"
import plusActive from "../../shared/img/plusActive.svg"
import { Link } from "react-router-dom"

const CertainCoin = ({item}) => {

    return(
        <>
            <Link to={`/coin/${item.id}`}  className={styles.coin}>
                        <div className={styles.leftsideCoin}>
                            <img src={item.image} alt="" />
                            <div className={styles.leftsideCoinText}>
                                <span>{item.name}</span>
                                <p>{item.symbol}</p>
                            </div>
                        </div>
                        <div className={styles.rightsideCoin}>
                            <div className={styles.rightsideCoinText}>
                                <p>Price to bitcoin:</p>
                                <span>{item.current_price}</span>
                            </div>
                        <img src={plusActive} className={styles.imgAddActive}/>
                        <img src={plus} className={styles.imgAdd}/>
                        </div>
                    </Link>
        </>
    )
}

export default CertainCoin