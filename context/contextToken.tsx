import Cookies from "js-cookie"
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { useQuery } from "react-query"
import setAuthToken from "../authToken"
import { getMe } from "../services/auth.service"

interface ITokenContextProvider {
  children: ReactNode
  value?: IValues
  user?: any
}

interface IValues {
  token: string
  setToken: Dispatch<SetStateAction<string>>
  user: any
}

export const TokenContext = createContext<IValues>({
  token: "",
  setToken: () => "",
  user: {}
})

export const TokenContextProvider: FC<ITokenContextProvider> = (props) => {
  const { children } = props
  const { isLoading, error, data } = useQuery("getMyInfo", getMe)
  const [token, setToken] = useState(Cookies.get("Authorization") || "")
  const [user, setUser] = useState()

  const Values: IValues = {
    token,
    setToken,
    user
  }
  setAuthToken();
  useEffect(() => {
    setUser(data?.data)
  }, [data?.data])
  return (
    <TokenContext.Provider value={Values}>{children}</TokenContext.Provider>
  )
}
