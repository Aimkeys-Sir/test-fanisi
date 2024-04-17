import UserProvider, { useUserContext } from "../../auth/_components/authContext"
import { Typography } from "../../stories"
import Logo from "../../assets/images/logo.png"
import { RiMenu3Fill } from "react-icons/ri"
import { useState } from "react"
import Menu from "./menu"

export default function Topbar() {
  const { user } = useUserContext()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="flex justify-between lg:p-8 py-2 px-4 xl:py-4 xl:p-6 border-0 border-b-2 border-white-1">
      <div className="flex gap-4 items-center">
        <img src={Logo} alt="" className="h-14" />
        <Typography className="hidden md:block">
          Hi, {user?.name?.split(" ")?.[0] || ""}
        </Typography>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
        <RiMenu3Fill />
      </button>
      {showMenu && <Menu onClose={()=>setShowMenu(false)}/>}
    </div>
  )
}
