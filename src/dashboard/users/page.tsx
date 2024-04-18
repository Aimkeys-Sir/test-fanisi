import { MdAdd } from "react-icons/md"
import { Button, Typography } from "../../stories"
import Table from "./usersTable"
import { useUserContext } from "../../auth/_components/authContext"
import { useState } from "react"
import CreateModal from "./createModal"
import { User } from "../../interfaces"

export default function Users() {
  const [users, setUsers] = useState<{ data: User[]; meta: any }>({
    data: [],
    meta: {},
  })
  const { user } = useUserContext()
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="">
      <div className="flex flex-col gap-4 md:flex-row 2xl:p-8 xl:p-4 sm:p-4 justify-between md:items-center border-b-2 border-white-1">
        <div>
          {showCreate && (
            <CreateModal
              setShow={async (show) => {
                setShowCreate(show)
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}/users`
                  )
                  const data = await res.json()
                  setUsers(data)
              }}
            />
          )}
          <div className="flex items-center gap-4">
            <Typography variant="xl">Test.fanisi Users</Typography>
            <Typography className="text-aqua-1 font-sans-2 bg-aqua-2 px-4 py-1 rounded-lg">
              {users.meta.itemCount}
            </Typography>
          </div>
          <Typography className="text-black-3">
            Crafting Tomorrow's Success, One Test at a Time.
          </Typography>
        </div>
        {user.isAdmin && (
          <Button
            onClick={() => setShowCreate(true)}
            className="flex gap-4 items-center px-4"
          >
            <MdAdd className="text-lg" />
            Add Users
          </Button>
        )}
      </div>
      <Table users={users} setUsers={setUsers} />
    </div>
  )
}
