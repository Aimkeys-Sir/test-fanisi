const email = (email: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

const phoneNumber = (phone: string) =>
  /^[0-9]{10}$/.test(phone) || /^\+[0-9]{12}/.test(phone)

const password = (pass: string) =>
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
    pass
  )

export { email, phoneNumber, password }
