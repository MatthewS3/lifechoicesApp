import { express } from "express"
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { verifyAToken } from "../middleware/UserAuthentication.js"
const userRouter = express.Router()
// FETCH USERS
userRouter.get('/', (req, res) => {
    try {
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
// FETCH USERS
userRouter.get('/:id', (req, res)=>{
    try {
        users.fetchUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve user"
        })
    }
})
// add a user
// ensure the data being sent is in json. post, put and patch all need body-parser middleware
userRouter.post('/register', bodyParser.json(), (req, res)=>{
    try {
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add a new user"
        })
    }
})
export {
    userRouter, express
}

