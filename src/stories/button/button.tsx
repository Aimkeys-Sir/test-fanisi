import React from "react"
import clsm from "../../lib/clsm"

enum VARIANTS {
  primary,
}
type Props = {
  variant?: keyof typeof VARIANTS
} & React.ComponentPropsWithRef<"button">

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className = "", variant = "primary", ...rest },
  ref
) {
  return (
    <button
      className={clsm(
        "cursor-pointer py-3 rounded font-sans-2 font-semibold",
        variant === "primary" ? "text-primary bg-white-3 hover:bg-green-1" : "",
        variant === "primary" ? "text-white-3 bg-primary" : "",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
})

export default Button
