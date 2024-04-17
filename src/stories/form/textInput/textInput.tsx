import React, { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import Typography from "../../typography/typography"
import clsm from "../../../lib/clsm"

enum VARIANTS {
  text,
  password,
  number,
}
type Props = {
  label?: string
  variant?: keyof typeof VARIANTS
  error?: string
} & React.ComponentPropsWithRef<"input">

const TextInput = React.forwardRef<HTMLInputElement, Props>(function TextInput(
  { children, id, label, variant = "text", error, readOnly, disabled, ...rest },
  ref
) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div
        className={clsm(
          "border border-gray-2 rounded-lg flex shadow-sm mt-2 bg-white-3 py-2 px-2 focus-within:border-primary focus-within:border-2",
          (readOnly || disabled) && "text-white-1 bg-white-2 focus-within:border-gray-2 focus-within:border-1 cursor-not-allowed"

        )}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          className={clsm(
            "font-sans-2 bg-transparent outline-none grow text-black-2 text-lg",
            error && "border-red-1",
            (readOnly || disabled) && "cursor-not-allowed"
          )}
          id={id}
          type={variant === "password" && !show ? "password" : "text"}
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
      {error && (
        <Typography variant="sm" className="text-red-1">
          {error}
        </Typography>
      )}
    </div>
  )
})
export default TextInput
