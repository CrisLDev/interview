import React from "react"
import Card from "./components/MiniComponents/Card/Card"

const item = {
  name: "Libro de harry potter",
  imgUrl:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
  description:
    "First book published by JK Rooling about a boy that is a wizard.",
}

const store = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5">
          <dl className="gap-x-5 gap-y-5 grid grid-cols-3 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5">
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
            <div className="relative">
              <Card item={item} />
            </div>
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
