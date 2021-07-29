import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface ChildProps {
  handleClickSubmit: (item: any, image: any) => void
  initialState?: any
}

const itemform: FC<ChildProps> = (props) => {
  const {
    handleClickSubmit,
    initialState = {
      name: "",
      description: "",
      stock: "",
    },
  } = props
  const [item, setItem] = useState<any>(initialState)
  const [image, setImage] = useState<any>()
  const handleInputChange = (e: InputChange) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleClickSubmit(item, image)
  }
  useEffect(() => {
    setItem(initialState)
  }, [props])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Item name"
                onChange={handleInputChange}
                value={item.name}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Item description"
                onChange={handleInputChange}
                value={item.description}
              />
            </div>
            <div>
              <label htmlFor="stock" className="sr-only">
                Stock
              </label>
              <input
                id="stock"
                name="stock"
                type="stock"
                autoComplete="stock"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Stock"
                onChange={handleInputChange}
                value={item.stock}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="image"
                        type="file"
                        className="sr-only"
                        onChange={(e) => setImage(e.target.files)}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Item
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default itemform
