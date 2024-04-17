import { IoClose } from "react-icons/io5"
import clsm from "../../lib/clsm"

type Props = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  className2?: string
}

export default function Modal({
  children,
  onClick,
  className = "",
  className2 = "",
}: Props) {
  return (
    <div className="fixed z-40 h-screen top-0 left-0 flex flex-col items-center lg:justify-center w-screen sm:justify-end">
      <div
        onClick={onClick}
        className={clsm(
          "bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20",
          "h-full w-full fixed left-0 top-0 z-20",
          "flex flex-col justify-end lg:justify-center items-center",
          className
        )}
      ></div>
      <div
        className={clsm(
          "relative z-40 w-full flex justify-center sm:sticky sm:bottom-0",
          className2
        )}
      >
        <div className="relative bg-white w-full max-w-[500px] rounded-xl p-8">
            <IoClose onClick={onClick} className="text-black-3 text-3xl absolute top-6 right-6 cursor-pointer"/>
          {children}
        </div>
      </div>
    </div>
  )
}
