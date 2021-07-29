import { useRouter } from "next/router"
import React, { ChangeEvent, FormEvent, useContext, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import setAuthToken from "../authToken"
import { TokenContext } from "../context/contextToken"
import { createItem } from "../services/item.service"
import ItemForm from "./components/ItemForm/itemform"

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const createitem = () => {
  const { token } = useContext(TokenContext)
  // Access the client
  const queryClient = useQueryClient()
  // Mutations
  const mutation = useMutation(createItem, {
    onSuccess: (data) => {
      const token: string = data.data.token
      queryClient.setQueryData("userLoged", [token])
    },
  })
  const router = useRouter()
  setAuthToken();
  const handleSend = (item: any, image: any) => {
    let formData = new FormData()
    formData.append("name", item.name)
    formData.append("description", item.description)
    formData.append("stock", item.stock)
    formData.append("image", image[0])
    mutation.mutate(formData)
    router.push("/myitems")
  }
  return (
    <>
      <ItemForm handleClickSubmit={handleSend} />
    </>
  )
}

export default createitem
