import React, { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"

enum VARIANTS {
  text,
  password,
  number,
}
type Props = {
  label?: string
  variant?: keyof typeof VARIANTS
} & React.ComponentPropsWithRef<"input">

const TextInput = React.forwardRef<HTMLInputElement, Props>(function TextInput(
  { children, id, label, variant = "text", ...rest },
  ref
) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="border border-gray-2 rounded-lg flex shadow-sm mt-2 bg-white-3 py-2 px-2 focus-within:border-primary focus-within:border-2">
        <input
          className="font-sans-2 bg-transparent outline-none grow text-black-2 text-lg"
          id={id}
          type={(variant==="password" && !show) ? "password" : "text"}
          ref={ref}
          {...rest}
        />
        {variant === "password" &&
          (show ? (
            <IoEyeOutline
              className="w-6 h-6 cursor-pointer text-black-2"
              onClick={() => setShow(!show)}
            />
          ) : (
            <IoEyeOffOutline
              className="w-6 h-6 cursor-pointer text-black-2"
              onClick={() => setShow(!show)}
            />
          ))}
      </div>
    </div>
  )
})
export default TextInput
