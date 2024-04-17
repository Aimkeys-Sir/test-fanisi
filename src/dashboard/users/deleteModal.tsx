import { useEffect, useState } from "react"
import { User } from "../../interfaces"
import { Button, Checkbox, Modal, TextInput, Typography } from "../../stories"
import { phoneNumber } from "../../lib/validate/validateForm"
import { FaCheckSquare } from "react-icons/fa"
import { RiDeleteBin2Line } from "react-icons/ri"

export default function DeleteModal({
  user,
  setShow,
}: {
  user: User
  setShow: (show: boolean) => void
}) {
  const [errors, setErrors] = useState({
    res: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const deleteUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
      method: "DELETE",
    })
    if (res.ok) {
      setShowSuccess(true)
    } else {
      setErrors((e) => ({ ...e, res: "Something happened on our end. User could not be deleted" }))
    }
  }
  return (
    <Modal onClick={() => setShow(false)}>
      {showSuccess ? (
        <div className="flex gap-4 items-center">
          <Typography variant="lg">User Deleted successfully</Typography>
          <FaCheckSquare className="text-primary text-3xl" />
        </div>
      ) : (
        <>
          <Typography variant="lg" className="text-red-1 flex gap-2 items-center"><RiDeleteBin2Line/> Delete user {"<"}<Typography className="text-black-1">{user.name}</Typography>{">"}?</Typography>
          {errors.res && <Typography>{errors.res}</Typography>}
          <Button onClick={deleteUser} className="w-full mt-4">Confirm</Button>
        </>
      )}
    </Modal>
  )
}
