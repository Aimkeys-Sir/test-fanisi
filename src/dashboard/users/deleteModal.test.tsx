import { render, screen } from "@testing-library/react"
import DeleteModal from "./deleteModal"

const user = {
    "id": 3,
    "name": "Sherman Jenkins",
    "email": "Cali.Cruickshank42@gmail.com",
    "phoneNumber": "+254750400152",
    "isAdmin": true
}

test("Confirms delete", () => {
    render(<DeleteModal setShow={()=>{}} user={{...user}}/>)
    const button = screen.getByText("Confirm")
    expect(button).toBeInTheDocument()
})