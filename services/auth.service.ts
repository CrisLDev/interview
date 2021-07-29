import axios from "axios"
import Cookies from "js-cookie"

const API_URI = process.env.API_URI || "http://localhost:4123/api/"

export const createUser = async (userData: any) => {
  return axios.post(`${API_URI}users`, userData)
}

export const getUser = async (userData: any) => {
  return axios.post(`${API_URI}auth`, userData)
}

export const getMe = async () => {
  return axios.get(`${API_URI}auth`)
}

export const setTokenInCookie = async (token: string) => {
  const threeHours = new Date(new Date().getTime() + 180 * 60 * 1000)
  Cookies.set("Authorization", token, {
    expires: threeHours,
  })
}
