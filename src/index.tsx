import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Login from "./auth/login"
import DashboardLayout from "./dashboard/layout"
import Users from "./dashboard/users/page"
import SignUp from "./auth/signup"

const api = process.env.REACT_APP_API_URL

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //error element here
  },
  {
    path: "/login",
    element: <Login />,
    action: async ({ request, params }) => {
      const formData = await request.formData()
      console.log(formData)
      const email = formData.get("email")
      const password = formData.get("password")
      const res = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      console.log(data)

      if (!res.ok) {
        return redirect("/login")
      } else {
        localStorage.setItem("access_token", data.token)
        return redirect("/dashboard/users")
      }
    },
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
