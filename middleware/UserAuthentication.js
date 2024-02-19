import { config } from "dotenv";
import { jwt } from "jsonwebtoken";
const {sign, verify} = jwt
config()

function createToken(user) {
    return sign ({
        emailAdd: user.emailAdd,
        userPwd:  user.userPwd,    
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h' // expires in 1 hour
    }
    )
}

function verifyAToken(req, res, next) {
    // Retrive a token from the browser
    const token = req.headers['Autherization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)) {
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the current credentials"
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Please login"
        })
    }
}
export {
    createToken,
    verifyAToken
}