const express = require('express');

const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3002;
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");
const messageRouter = require("./router/messageRouter");


app.use(express.json());
app.use(cookieParser())

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/", messageRouter);

app.listen(PORT, function () {
    console.log(`Server is listening to the port ${PORT}`);
})