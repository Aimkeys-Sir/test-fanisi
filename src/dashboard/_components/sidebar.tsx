import Logo from "../../assets/images/logo.png"
import { Button, Typography } from "../../stories"
import { PiUsersBold } from "react-icons/pi"
import { MdTaskAlt } from "react-icons/md"
import { RxDashboard } from "react-icons/rx"
import { IoMdLogOut } from "react-icons/io"
import clsm from "../../lib/clsm"
import { useLocation, useNavigate } from "react-router-dom"
import { IoClose } from "react-icons/io5"

const links: {
  name: string
  path: string
  Icon: (props: any) => JSX.Element
}[] = [
  {
    name: "Dashboard",
    path: "",
    Icon: (props: any) => <RxDashboard {...props} />,
  },
  {
    name: "Users",
    path: "/users",
    Icon: (props: any) => <PiUsersBold {...props} />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    Icon: (props: any) => <MdTaskAlt {...props} />,
  },
]

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const active = pathname.split("/").filter((p) => !!p)[1] ?? "dashboard"
  const logout = () => {
    localStorage.removeItem("access_token")
    navigate("/login")
  }
  return (
    <div className="flex flex-col relative h-screen left-0 top-0 w-full md:w-1/4 min-w-[300px] max-w-[400px] flex flex-col xl:p-8 md:lg:p-6 border-0 border-white-1 md:border-r-2">
      <div className="mt-4 pt-4 flex justify-between items-center">
        <img src={Logo} alt="" className="h-20 md:md-20" />
        <IoClose
          onClick={onClose}
          className="cursor-pointer text-3xl text-black-2"
        />
      </div>
      <div className="flex flex-col justify-between grow md:mb-4 md:mt-6  md:pt-4">
        <div className="absolute h-[2px] left-0 bg-white-1 w-full"></div>
        <div className="flex flex-col gap-4 mt-4">
          {links.map(({ name, path, Icon }) => (
            <Button
              key={name}
              onClick={() => {
                navigate(`/dashboard${path}`)
                onClose?.()
              }}
              className={clsm(
                "flex items-center gap-4 px-8 bg-transparent text-black-2 hover:bg-aqua-2",
                active === name.toLowerCase()
                  ? " text-aqua-1 bg-aqua-2 border-aqua-1 border"
                  : ""
              )}
            >
              <Icon className="text-2xl" />
              <Typography variant="md">{name}</Typography>
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="absolute h-[2px] left-0 bg-white-1 w-full"></div>
          <Button
            onClick={logout}
            className="flex items-center mt-4 gap-4 px-8 bg-transparent text-black-2 hover:bg-red-2"
          >
            <IoMdLogOut className="text-2xl" />
            <Typography variant="md">Logout</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
