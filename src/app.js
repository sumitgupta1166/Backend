import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    linit: "16kb"
}))
app.use(express.urlencoded({extended: true, limit: "32kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes  
import userRouter from './routes/user.routes.js'
//routes decleration
app.use("/api/v1/users",userRouter)

// https://localhost:8000/api/v1/users/login
export {app}