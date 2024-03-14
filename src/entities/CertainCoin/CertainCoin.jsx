import styles from "./CertainCoin.module.css"
import testPNG from "../../shared/img/gala.png"
import plus from "../../shared/img/plus.svg"
import plusActive from "../../shared/img/plusActive.svg"

const CertainCoin = ({imgURL, price, name}) => {

    return(
        <>
            <div className={styles.coin}>
                        <div className={styles.leftsideCoin}>
                            <img src={testPNG} alt="" />
                            <div className={styles.leftsideCoinText}>
                                <span>{name}</span>
                                <p>{name}</p>
                            </div>
                        </div>
                        <div className={styles.rightsideCoin}>
                            <div className={styles.rightsideCoinText}>
                                <p>Price to bitcoin:</p>
                                <span>{price}</span>
                            </div>
                        <img src={plus} className={styles.imgAdd}/>
                        <img src={plusActive} className={styles.imgAddActive}/>
                        </div>
                    </div>
        </>
    )
}

export default CertainCoin