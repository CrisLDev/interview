import { FC } from "react"
import styles from "./Card.module.css"
import { PencilIcon, TrashIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useMutation, useQueryClient } from "react-query"
import { deleteItemById } from "../../../../services/item.service"

interface ICard {
  item: any
  own: boolean
}

const Card: FC<ICard> = (props) => {
  const { item, own } = props
  // Access the client
  const queryClient = useQueryClient()
  // Mutations
  const mutation = useMutation(deleteItemById, {
    onSuccess: (data) => {
      queryClient.setQueryData("itemDeleted", data.data)
      queryClient.invalidateQueries("allMyItems")
    },
  })
  return (
    <div className={styles.card}>
      <div className={`${styles.cardHeader} textTruncate`}>{item.name}</div>
      <div className={styles.cardContent}>
        <img
          src={`${process.env.API_URI || "http://localhost:4123"}/${
            item.imgUrl
          }`}
          alt={item.name}
        />
      </div>
      <div className={styles.cardEnd}>
        {own ? (
          <>
            <Link href={`myitems/edit/${item._id}`}>
              <button className={styles.cardButton}>
                <PencilIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Link>
            <button
              className={styles.cardButton}
              onClick={() => mutation.mutate(item._id)}
            >
              <TrashIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        ) : (
          <>
            <h5>10$</h5>
            <button className={styles.cardButton}>Add to cart</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
