import { Form, redirect, useNavigate } from "react-router-dom"
import { Button, TextInput, Typography } from "../../stories"
import Test from "../assets/images/test.jpg"
import { useEffect, useState } from "react"
import { email, password, phoneNumber } from "../../lib/validate/validateForm"

type Details = {
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  name: string
}

type Props = {
  title: string
  subtitle: string
  buttonText: string
  afterSubmit: () => void
}
export default function CreateUser({
  title,
  subtitle,
  buttonText,
  afterSubmit,
}: Props) {
  const [details, setDetails] = useState<Details>({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    name: "",
  })
  const [validateErrors, setErrors] = useState<{
    input: Details
    res: string
    onEdit?: boolean
  }>({
    res: "",
    input: {} as Details,
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (validateErrors.onEdit) {
      const errors = validate()
      setErrors((e) => ({ ...e, input: errors, res: "" }))
    }
  }, [details, validateErrors.onEdit])

  const validate = () => {
    const errors: Details = {} as Details
    if (details.password.length < 8) {
      errors.password = "Password too weak"
    }
    if (details.password !== details.confirmPassword) {
      errors.password = "Passwords do not match"
    }
    if (!email(details.email)) {
      errors.email = "Invalid email"
    }
    if (!phoneNumber(details.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number"
    }

    return errors
  }

  const handleSubmit = async () => {
    const payload = { ...details, isAdmin: false }
    const errors = validate()
    setErrors((e) => ({ ...e, input: errors, onEdit: true }))
    const isError = Object.values(errors).filter((e) => !!e).length > 0
    if (isError) return
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        afterSubmit()
      } else {
        setErrors((e) => ({ ...e, res: data.message, input: {} as Details }))
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div>
        <Typography variant="xl">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="xl:mt-8 mt-4 max-w-[500px] gap-4 lg:gap-2 xl-gap-4 flex flex-col"
      >
        <TextInput
          required
          id="__name"
          label="Full Name"
          name="name"
          error={validateErrors.input.name}
          value={details.name}
          onChange={handleChange}
          placeholder="Markus Morgenstein"
        />
        <TextInput
          required
          id="__email"
          label="Email"
          name="email"
          error={validateErrors.input.email}
          value={details.email}
          onChange={handleChange}
          placeholder="genious@gmail.com"
        />
        <TextInput
          required
          id="__phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          error={validateErrors.input.phoneNumber}
          value={details.phoneNumber}
          onChange={handleChange}
          placeholder="+254712345678"
        />
        <TextInput
          required
          id="__password"
          label="Password"
          value={details.password}
          error={validateErrors.input.password}
          onChange={handleChange}
          placeholder="********"
          variant="password"
          name="password"
        />
        <TextInput
          required
          id="__confirmPassword"
          label="Confirm Password"
          value={details.confirmPassword}
          onChange={handleChange}
          error={validateErrors.input.confirmPassword}
          placeholder="********"
          variant="password"
          name="confirmPassword"
        />
        <div className="relative">
          {validateErrors.res && (
            <div className="absolute flex gap-2 mt-2">
              <Typography className=" text-red-1">
                {validateErrors.res}
              </Typography>
            </div>
          )}
          <Button type="submit" className="mt-6 w-full">
            {buttonText}
          </Button>
        </div>
      </form>
    </>
  )
}
