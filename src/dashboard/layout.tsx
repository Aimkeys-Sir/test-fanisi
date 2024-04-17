import { Outlet } from "react-router-dom"
import Sidebar from "./_components/sidebar"
import Topbar from "./_components/topbar"
import UserProvider from "../auth/_components/authContext"

export default function DashboardLayout() {
  return (
    <UserProvider>
      <div className="font-sans-1 md:flex bg-white h-screen w-screen">
        <div className="sm:hidden md:block">
          <Sidebar />
        </div>
        <div className="relative flex flex-col grow">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </UserProvider>
  )
}
