import Router from "next/router"
import { useContext, useEffect } from "react"
import { TokenContext } from "../context/contextToken"

export const NoAuthentication = () => {
  const { token } = useContext(TokenContext)

  useEffect(() => {
    if (!token) {
      Router.push(`/login`)
    }
  }, [token])
}
