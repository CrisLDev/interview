import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { createUser } from "../services/auth.service"

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const register = () => {
  const [userToRegister, setUserToRegister] = useState<any>({})
  // Access the client
  const queryClient = useQueryClient()
  // Mutations
  const mutation = useMutation(createUser)
  const handleInputChange = (e: InputChange) => {
    setUserToRegister({ ...userToRegister, [e.target.name]: e.target.value })
  }
  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(userToRegister)
    router.push("/")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link href="/login">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                login with your existing account
              </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user-name" className="sr-only">
                User Name
              </label>
              <input
                id="user-name"
                name="userName"
                type="text"
                autoComplete="userName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="UserName"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="full-name" className="sr-only">
                User Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="fullName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Repeat Password
              </label>
              <input
                id="password"
                name="password2"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Repeat Password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Me
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register
