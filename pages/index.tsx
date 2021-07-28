import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import styles from "../styles/Index.module.css"
import { ReactQueryDevtools } from "react-query/devtools"

const fetchAllPeopleFromAPI = async () => {
  const res = await fetch("https://swapi.dev/api/people/")
  return res.json()
}

function HTML() {
  const { isLoading, error, data } = useQuery("nothing", fetchAllPeopleFromAPI)
  console.log("data", data)
  console.log("isLoading", isLoading)
  return (
    <>
      {isLoading === false &&
        data.results.map((item: any) => (
          <div>
            <strong>{item.name}</strong>
            <p>{item.gender}</p>
            <p>{item.hair_color}</p>
          </div>
        ))}
    </>
  )
}

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <HTML />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
