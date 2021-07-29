import React from "react"
import { useQuery } from "react-query"
import { getAllItems } from "../services/item.service"
import Card from "./components/MiniComponents/Card/Card"

const store = () => {
  const { isLoading, error, data } = useQuery("allMyItems", getAllItems)
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5">
          <dl className="gap-x-5 gap-y-5 grid grid-cols-3 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5">
          {!isLoading &&
            data &&
            data.data.map((item: any) => (
              <div className="relative">
                <Card item={item} key={item.id} own={false} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default store
