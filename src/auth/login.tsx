import { Form } from "react-router-dom"
import { Button, TextInput, Typography } from "../stories"
import Test from "../assets/images/test.jpg"

export default function Login() {
  return (
    <div className="flex justify-center bg-secondary lg:p-8 xl:p-20 h-screen font-sans-1">
      <div className="flex shadow-lg overflow-hidden">
        <div className="grow focus-within:border-blue-1 flex flex-col justify-center  bg-white lg:p-8 lg:px-12 lg:pt-20">
          <div>
            <Typography variant="xl">Welcome Back</Typography>
            <Typography>Login to continue</Typography>
          </div>

          <Form method="post">
            <div className="mt-8 max-w-[500px] gap-4 flex flex-col">
              <TextInput
                id="__email"
                label="Email"
                name="email"
                placeholder="genious@gmail.com"
              />
              <TextInput
                id="__password"
                label="Password"
                placeholder="********"
                variant="password"
                name="password"
              />
              <Button type="submit" className="mt-6">Login</Button>
            </div>
          </Form>
        </div>
        <div className="w-1/2 bg-white">
          <img src={Test} alt="" className="object-fill max-h-[1000px]" />
        </div>
      </div>
    </div>
  )
}
