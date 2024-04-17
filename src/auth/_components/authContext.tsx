import {
    Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useNavigate } from "react-router-dom"

import { User } from "../../interfaces"
interface UserC {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const userContext = createContext({} as UserC)

export const useUserContext = () => useContext(userContext)

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User)
  const navigate = useNavigate()
  const getMe = async () => {
    const token = localStorage.getItem("access_token")

    if (!token) {
      navigate("/login")
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data)
    } else {
      navigate("/login")
    }
  }

  useEffect(() => {
    getMe()
  }, [])
  return (
    <userContext.Provider value={{ setUser, user }}>
      {children}
    </userContext.Provider>
  )
}
