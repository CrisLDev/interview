import React from "react"
import Card from "./components/MiniComponents/Card/Card"

const item = {
  name: "Libro de harry potter",
  imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
  description:
    "First book published by JK Rooling about a boy that is a wizard.",
}

const store = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="md:space-y-0 sm:grid sm:grid-cols-1 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <Card item={item} />
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default store
