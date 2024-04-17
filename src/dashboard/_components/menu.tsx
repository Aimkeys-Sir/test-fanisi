import { Modal } from "../../stories"
import Sidebar from "./sidebar"

export default function Menu({onClose}:{onClose:()=>void}) {
  return (
    <Modal>
      <Sidebar onClose={onClose}/>
    </Modal>
  )
}
