import 'dotenv/config'
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)

initializeApp({
  credential: applicationDefault()
})

export const aut = getAuth()
