const express = require('express');
const app = express();

const PORT = process.env.PORT || 8001;

const userRouter = require("./Router/userRouter");

app.use(express.json());

app.use("/api/user", userRouter);

app.listen(PORT, function () {
    console.log(`server started at port ${PORT}`);
})


