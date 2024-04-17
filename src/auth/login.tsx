import { Form, useNavigate } from "react-router-dom"
import { Button, TextInput, Typography } from "../stories"
import Test from "../assets/images/test.jpg"
import Logo from "../assets/images/logo.png"

export default function Login() {
    const navigate=useNavigate()
  return (
    <div className="flex bg-secondary md:p-8 sm:p-4 xl:p-20  h-screen font-sans-1">
      <div className="flex shadow-lg overflow-hidden w-full grow w-full border-2 border-white focus-within:border-blue-1">
        <div className="flex flex-col grow  flex flex-col  w-full  grow  bg-white p-6 md:p-8 md:px-12 lg:pt-20">
          <div className="mb-4">
            <img src={Logo} alt="" className="h-20" />
          </div>
          <div>
            <Typography variant="xl">Welcome Back</Typography>
            <Typography>Login to continue</Typography>
          </div>

          <Form method="post">
            <div className="mt-8 w-full grow  max-w-[500px] gap-4 flex flex-col">
              <TextInput
                id="__email"
                label="Email"
                required
                name="email"
                placeholder="genious@gmail.com"
              />
              <TextInput
                id="__password"
                required
                label="Password"
                placeholder="********"
                variant="password"
                name="password"
              />
              <Button type="submit" className="mt-6">
                Login
              </Button>
              <div className="flex items-center gap-2 py-4">
            <Typography>Don't have an account?</Typography>
            <button
              onClick={() => navigate("/signup")}
              className="text-primary text-lg text-semibold"
            >
              Sign Up
            </button>
          </div>
            </div>
          </Form>
        </div>
        <div className="w-1/2 bg-white">
          <img
            src={Test}
            alt=""
            className="object-fill max-h-[1000px] sm:hidden md:block"
          />
        </div>
      </div>
    </div>
  )
}
