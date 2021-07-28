import Link from "next/link"
import React, { useState } from "react"
import { useQuery } from "react-query"
import { getAllItems } from "../services/item.service"
import Card from "./components/MiniComponents/Card/Card"

const myitems = () => {
  const { isLoading, error, data } = useQuery("allMyItems", getAllItems)
  console.log(data)
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ width: "100%", padding: "0 0 1em 0" }}>
          <h4>Create new item</h4>
          <Link href="/itemform">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
            >
              Agregar +
            </button>
          </Link>
        </div>
        <dl className="gap-x-5 gap-y-5 grid grid-cols-3 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5">
          {!isLoading &&
            data &&
            data.data.map((item: any) => (
              <div className="relative">
                <Card item={item} own={true} />
              </div>
            ))}
        </dl>
      </div>
    </div>
  )
}

export default myitems
