import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express"

app.use(cors({origin: process.env.CORS_ORIGIN,
Credential: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser)

export { app }