import React from "react"
import clsm from "../../lib/clsm"

enum VARIANTS {
  xl,
  lg,
  md,
  sm,
  xs,
}

type Props = {
  children: React.ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
  font?: "sans-1" | "sans-2"
}
export default function Typography({
  children,
  variant = "md",
  className = "",
  font = "sans-1",
}: Props) {
  return (
    <div
      className={clsm(
        "",
        `font-${font} text-${variant}`,
        variant === "lg"
          ? "font-semibold lg:text-2xl"
          : variant === "xl"
          ? "font-semibold lg:text-4xl"
          : variant=== "md"?"text-xl":"",
        className
      )}
    >
      {children}
    </div>
  )
}
