import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import nock from "nock"

import Login from "./login"
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

const fakeUserResponse = { token: "fake_user_token" }

beforeAll(() =>
  nock(process.env.REACT_APP_API_URL as string)
    .post("/auth/login", { email: "markus@gmail.com", password:"secretpass" })
    .reply(201, fakeUserResponse)
)
afterEach(() => {
  window.localStorage.removeItem("token")
})

afterAll(() => {
  nock.cleanAll()
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
])
test("Login renders correctly", () => {
  render(<RouterProvider router={router} />)
  expect(screen.getByLabelText("Email")).toBeInTheDocument()
})

test("renders password field", () => {
  render(<RouterProvider router={router} />)
  expect(screen.getByLabelText("Password")).toBeInTheDocument()
})

// test("Allows the user to login successfully", async () => {
// render(<RouterProvider router={router} />)
//   fireEvent.change(screen.getByLabelText("Email"), {
//     target: { value: "markus@gmail.com" },
//   })

//   fireEvent.change(screen.getByLabelText("Password"), {
//     target: { value: "secretPass" },
//   })
//   fireEvent.click(screen.getByText("Login"))

//   expect(window.localStorage.getItem("access_token")).toEqual(
//     fakeUserResponse.token
//   )
// })
