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

interface ITokenContextProvider {
  children: ReactNode
  value?: IValues
}

interface IValues {
  token: string
  setToken: Dispatch<SetStateAction<string>>
}

export const TokenContext = createContext<IValues>({
  token: "",
  setToken: () => "",
})

export const TokenContextProvider: FC<ITokenContextProvider> = (props) => {
  const { children } = props
  const [token, setToken] = useState(Cookies.get("Authorization") || "")

  const Values: IValues = {
    token,
    setToken,
  }

  return (
    <TokenContext.Provider value={Values}>{children}</TokenContext.Provider>
  )
}
