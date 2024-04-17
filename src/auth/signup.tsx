import { Form, redirect, useNavigate } from "react-router-dom"
import { Button, TextInput, Typography } from "../stories"
import Test from "../assets/images/test.jpg"
import { useEffect, useState } from "react"
import { email, password, phoneNumber } from "../lib/validate/validateForm"
import CreateUser from "./_components/createUser"
import Logo from "../assets/images/logo.png"

type Details = {
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  name: string
}
const api = process.env.REACT_APP_API_URL

console.log({api})
export default function SignUp() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center bg-secondary md:p sm:p-4 2xl:p-20 border overflow-y-auto  h-screen font-sans-1">
      <div className=" flex shadow-lg overflow-hidden grow">
        <div className=" relative grow focus-within:border-blue-1 flex flex-col justify-center  bg-white md:px-12 lg:pt-20">
          <div className="flex justify-end pt-2 md:hidden">
            <img src={Logo} className="h-10" alt="" />
          </div>
          <CreateUser
            title="Welcome to Test.fanisi"
            subtitle="Create Account"
            afterSubmit={() => {
              navigate("/login")
            }}
            buttonText="create"
          />
          <div className="flex items-center gap-2 py-4">
            <Typography>Already have an account?</Typography>
            <button
              onClick={() => navigate("/login")}
              className="text-primary text-lg text-semibold"
            >
              Login
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-white hidden md:block">
          <img
            src={Test}
            alt=""
            className="object-fill max-h-[1000px] "
          />
        </div>
      </div>
    </div>
  )
}
