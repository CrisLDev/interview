import { FC } from "react"
import styles from "./Card.module.css"

interface ICard {
  item: any
}

const Card: FC<ICard> = (props) => {
  const { item } = props
  return (
    <div className={styles.card}>
      <div className={`${styles.cardHeader} textTruncate`}>{item.name}</div>
      <div className={styles.cardContent}>
        <img src={item.imgUrl} alt={item.name} />
      </div>
    </div>
  )
}

export default Card
