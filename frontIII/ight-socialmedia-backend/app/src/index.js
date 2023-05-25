import app from './app.js'
import { SingUp } from './controllers.js'
import './firebase.js'

app.post('/singup', SingUp)
// app.post('/login', SingUp)

app.listen(3000, () => console.log('online'))
