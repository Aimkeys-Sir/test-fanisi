import clsm from "../../../lib/clsm"
import { forwardRef } from "react"

type CheckboxProps = {
  className?: string,
} & React.ComponentPropsWithRef<"input">

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className = "", ...rest }, ref) {
    return (
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          ref={ref}
          className={clsm(
            "peer relative appearance-none shrink-0 w-4 h-4 border-2 border-green-500 rounded-sm",
            "focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 mt-1 bg-white",
            "checked:bg-primary checked:border-0",
            "disabled:border-steel-400 disabled:bg-steel-40",
            className
          )}
          {...rest}
        />
        <svg
          className="absolute w-2/3 h-2/3 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    )
  }
)

export default Checkbox
