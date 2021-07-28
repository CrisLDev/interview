import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import styles from "../styles/Index.module.css"

const fetchAllPeopleFromAPI = async () => {
  const res = await fetch("https://swapi.dev/api/people/")
  return res.json()
}

const index = () => {
  const { isLoading, error, data } = useQuery("nothing", fetchAllPeopleFromAPI)
  console.log("data", data)
  console.log("isLoading", isLoading)
  return (
    <>
      {isLoading === false &&
        data.items.results.map((item: any) => (
          <div>
            <strong>{item.name}</strong>
            <p>{item.gender}</p>
            <p>{item.hair_color}</p>
          </div>
        ))}
    </>
  )
}

export default index
