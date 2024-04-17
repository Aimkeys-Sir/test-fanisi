import { Form, useSearchParams } from "react-router-dom"
import { Typography } from "../../stories"
import { IoSearch } from "react-icons/io5"
import { RiDeleteBinLine } from "react-icons/ri"
import Pagination from "./pagination"
import { MdSearchOff } from "react-icons/md"
import { SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import EditModal from "./editModal"
import { User } from "../../interfaces"
import DeleteModal from "./deleteModal"

const data = [
  {
    name: "Alice Parker",
    email: "alice.parker@example.com",
    phoneNumber: "+1234567890",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNumber: "+1987654321",
  },
  {
    name: "Eva Martinez",
    email: "eva.martinez@example.com",
    phoneNumber: "+1555098765",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    phoneNumber: "+1789456123",
  },
  {
    name: "Sophia Nguyen",
    email: "sophia.nguyen@example.com",
    phoneNumber: "+1122334455",
  },
]

export default function Table({
  users,
  setUsers,
}: {
  users: { data: User[]; meta: any }
  setUsers: React.Dispatch<SetStateAction<{ data: User[]; meta: any }>>
}) {
  const [page, setPage] = useState(1)
  const ref = useRef<HTMLInputElement>(null)
  const [editUserId, setEditUserId] = useState<undefined | number>()
  const [deleteUserId, setDeleteUserId] = useState<undefined | number>()

  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get("name")

  const getUsers = useCallback(async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/users?name=${name || ""}&page=${page}`
    )
    if (ref.current) {
      ref.current.value = ""
    }
    const data = await res.json()
    setUsers(data)
  }, [name, page])

  useEffect(() => {
    getUsers()
  }, [name, page])

  return (
    <div className="relative xl:m-8 lg:m-4 sm:m-4 border-2 border-white-1 rounded-2xl xl:h-[71vh] lg:h-[65vh] overflow-y-auto overflow-x-auto  2xl:h-auto">
      <div className="p-4 sticky top-0 left-0">
        {editUserId && (
          <EditModal
            setShow={() => {
              setEditUserId(undefined)
              getUsers()
            }}
            user={users?.data.find((u) => u.id === editUserId) as User}
          />
        )}
        {deleteUserId && (
          <DeleteModal
            setShow={() => {
              setDeleteUserId(undefined)
              getUsers()
            }}
            user={users?.data.find((u) => u.id === deleteUserId) as User}
          />
        )}
        <Form
          method="get"
          onSubmit={(e) => {
            setPage(1)
          }}
        >
          <div className="flex lg:items-center justify-between sm:flex-col lg:flex-row gap-2 ">
            <div className="flex justify-between px-4 items-center md:gap-4 2xl:py-4 sm:py-3 border-2 border-white-1 rounded-2xl max-w-[600px]">
              <input
                type="text"
                ref={ref}
                name="name"
                placeholder="Search by name"
                className="text-xl outline-none bg-transparent w-[200px] grow w-auto"
              />
              <button
                type="submit"
                className="text-black-3 text-xl flex sm:items-start lg:items-center gap-2"
              >
                <IoSearch />
                <Typography className="hidden md:block">Search</Typography>
              </button>
            </div>
            {name && (
              <div
                onClick={() => {
                  searchParams.delete("name")
                  setSearchParams(searchParams)
                }}
                className="flex gap-2 items-center cursor-pointer bg-aqua-2 text-aqua-1 px-4 py-2 rounded-2xl border-aqua-1 border hover:shadow-lg"
              >
                <Typography>{name}</Typography>
                <MdSearchOff className="text-xl" />
              </div>
            )}
          </div>
        </Form>
      </div>
      <div className="flex  p-4 relative  sm:w-[600px] md:w-auto  lg:w-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              {["Name", "Email", "Phone Number", "Action"].map((name) => (
                <th
                  className="text-black-3 text-lg text-left font-semibold"
                  key={name}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.data.map(({ email, name, phoneNumber, id }) => (
              <tr
                onClick={(e) => {
                  console.log(e.target)
                  setEditUserId(id)
                }}
                className="border-b font-sans-2 text-black-3 xl:text-lg py-2 cursor-pointer hover:bg-gray-200"
                key={email}
              >
                <td className="xl:py-4 sm:py-2">{name}</td>
                <td className="xl:py-4 sm:py-2">{email}</td>
                <td className="xl:py-4 sm:py-2">{phoneNumber}</td>
                <td
                  id="delete"
                  onClick={(e) => {
                    e.stopPropagation()
                    setDeleteUserId(id)
                  }}
                  className="z-20 xl:py-4 sm:py-2 hover:text-red-1 group"
                >
                  <RiDeleteBinLine className="text-black-3 text-lg flex items-center gap-2 hover:text-red-1 group-hover:text-red-1" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        pages={users?.meta?.pageCount}
        current={page}
        handlePageChange={(selected) => setPage(selected + 1)}
      />
    </div>
  )
}
