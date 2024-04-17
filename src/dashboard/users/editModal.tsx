import { useEffect, useState } from "react"
import { User } from "../../interfaces"
import { Button, Checkbox, Modal, TextInput, Typography } from "../../stories"
import { phoneNumber } from "../../lib/validate/validateForm"
import { FaCheckSquare } from "react-icons/fa"

export default function EditModal({
  user,
  setShow,
}: {
  user: User
  setShow: (show: boolean) => void
}) {
  const [editUser, setEditUser] = useState(user)
  const [errors, setErrors] = useState({
    input: {
      phoneNumber: "",
    },
    res: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const errors = { phoneNumber: "" }
    if (!phoneNumber(editUser.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number"
    }
    setErrors((e) => ({ ...e, input: errors }))
    return errors
  }

  useEffect(() => {
    validate()
  }, [editUser.phoneNumber])
  const updateUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    })
    const data = await res.json()

    if (res.ok) {
      setShowSuccess(true)
    } else {
      setErrors((e) => ({ ...e, res: data.message }))
    }
  }
  return (
    <Modal onClick={() => setShow(false)}>
      {showSuccess ? (
        <div className="flex gap-4 items-center">
          <Typography variant="lg">User updated successfully</Typography>
          <FaCheckSquare className="text-primary text-3xl" />
        </div>
      ) : (
        <>
          <div>
            <Typography variant="lg">Edit User</Typography>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              updateUser()
            }}
            className="flex flex-col gap-4 mt-6"
          >
            <TextInput
              value={editUser.email}
              name="email"
              readOnly
              label="Email"
            />
            <TextInput
              value={editUser.name}
              name="name"
              required
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              label="Full Name"
            />
            <TextInput
              value={editUser.phoneNumber}
              name="name"
              error={errors.input.phoneNumber}
              required
              onChange={(e) => {
                setEditUser({ ...editUser, phoneNumber: e.target.value })
              }}
              label="Phone Number"
            />
            <div className="flex gap-4 items-center">
              <label htmlFor="isAdmin">
                <Typography variant="sm">Is admin User?</Typography>
              </label>
              <Checkbox
                id="isAdmin"
                checked={editUser.isAdmin}
                onChange={(e) =>
                  setEditUser({ ...editUser, isAdmin: e.target.checked })
                }
              />
            </div>
            <Button>Save Changes</Button>
          </form>
        </>
      )}
    </Modal>
  )
}
