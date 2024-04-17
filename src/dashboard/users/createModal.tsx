import { useState } from "react"
import CreateUser from "../../auth/_components/createUser"
import { Modal, Typography } from "../../stories"
import { FaCheckSquare } from "react-icons/fa"

export default function CreateModal({
  setShow,
}: {
  setShow: (show: boolean) => void
}) {
  const [showSuccess, setShowSuccess] = useState(false)
  return (
    <Modal onClick={() => setShow(false)}>
      {showSuccess ? (
        <div className="flex gap-4 items-center">
          <Typography variant="lg">User Created Successfully</Typography>
          <FaCheckSquare className="text-primary text-3xl" />
        </div>
      ) : (
        <CreateUser
          title="Create User"
          subtitle=""
          afterSubmit={() => setShowSuccess(true)}
          buttonText="Create"
        />
      )}
    </Modal>
  )
}
