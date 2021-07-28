import axios from "axios"
import { IDataServices } from "../interfaces/DataServices"

export const API_URI = process.env.API_URI || "http://localhost:4123/api/"

export const createItem = async (itemData: any) => {
  return axios.post(`${API_URI}items`, itemData)
}

export const getAllItems = async () => {
  return axios.get(`${API_URI}items`)
}

export const getItemById = async (id: any) => {
  console.log(id)
  return axios.get(`${API_URI}items/${id}`)
}

export const updateItemById = async (data: IDataServices) => {
  return axios.put(`${API_URI}items/${data.id}`, data.formData)
}
