import { useRouter } from "next/router"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { getItemById, updateItemById } from "../../../services/item.service"
import ItemForm from "../../components/ItemForm/itemform"

export function getServerSideProps(context: any) {
  return {
    props: { params: context.params },
  }
}

const itemId = ({ params }: any, props: any) => {
  const { id } = params
  // Access the client
  const queryClient = useQueryClient()
  // Mutations
  const mutation = useMutation(updateItemById, {
    onSuccess: (data) => {
      queryClient.setQueryData("itemUpdated", data.data)
      queryClient.invalidateQueries("allMyItems")
    },
  })
  const router = useRouter()
  const handleSend = (item: any, image: any) => {
    if (id) {
      let formData = new FormData()
      formData.append("name", item.name)
      formData.append("description", item.description)
      formData.append("stock", item.stock)
      if (image != undefined) {
        formData.append("image", image[0])
      }
      mutation.mutate({ id, formData })
      router.push("/myitems")
    }
  }
  const { isLoading, error, data } = useQuery("itemById", () => getItemById(id))
  return <ItemForm handleClickSubmit={handleSend} initialState={data?.data} />
}
export default itemId
