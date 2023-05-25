import { aut } from './firebase.js'

export async function SingUp (req, res) {
  try {
    const { email, password } = req.body
    const data = { email, password }
    const user = await aut.createUser(data)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ errorMessage: err })
  }
}

export async function ForgetPassword (req, res) {
  try {
    const { email } = req.body
    const data = { email }
    const user = await aut.sendPasswordResetEmail(data)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ errorMessage: err })
  }
}

// export async function Login (req, res) {
//   const { email, password } = req.body
//   const data = { email, password }
//   const user = await aut.(data)
//   res.json(user)
// }
