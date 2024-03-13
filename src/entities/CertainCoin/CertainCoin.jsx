import styles from "./CertainCoin.module.css"
import testPNG from "../../shared/img/gala.png"

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
                            <div>
                                <p>Price to bitcoin:</p>
                                <span>{price}</span>
                            </div>
                            
                        </div>
                    </div>
        </>
    )
}

export default CertainCoin