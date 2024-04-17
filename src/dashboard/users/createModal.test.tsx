import { render, screen } from "@testing-library/react"
import CreateModal from "./createModal"
import { MemoryRouter } from "react-router-dom"

test("It contains Name input", () => {
  render(
    <MemoryRouter>
      <CreateModal setShow={() => {}} />
    </MemoryRouter>
  )
  const input = screen.getByLabelText("Full Name")
  expect(input).toBeInTheDocument()
})
test("It contains Email input", () => {
  render(
    <MemoryRouter>
      <CreateModal setShow={() => {}} />
    </MemoryRouter>
  )
  const input = screen.getByLabelText("Email")
  expect(input).toBeInTheDocument()
})
test("It contains phone number input", () => {
  render(
    <MemoryRouter>
      <CreateModal setShow={() => {}} />
    </MemoryRouter>
  )
  const input = screen.getByLabelText("Phone Number")
  expect(input).toBeInTheDocument()
})
test("It contains Password input", () => {
  render(
    <MemoryRouter>
      <CreateModal setShow={() => {}} />
    </MemoryRouter>
  )
  const input = screen.getByLabelText("Password")
  expect(input).toBeInTheDocument()
})
test("It contains Confirm Password input", () => {
  render(
    <MemoryRouter>
      <CreateModal setShow={() => {}} />
    </MemoryRouter>
  )
  const input = screen.getByLabelText("Confirm Password")
  expect(input).toBeInTheDocument()
})
