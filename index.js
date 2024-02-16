import { express, userRouter } from "./controller/UserController";
import { productRouter } from "./controller/ProductController";
import cookieParser from "cookie-parser";
import { errorHandling } from './middleware/ErrorHandling';
import path from 'path'
import { config } from "dotenv";
config();

const app = express()
const port = +process.env.PORT
// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update later to specific domain
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Acess-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Expose-Header", "Authorization");
    next(null);
})
app.use (
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
    )
app.get('^/$|/lifechoices', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users',userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})