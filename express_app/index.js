const express = require('express')

const authRouter = require('./routes/auth')
const familyRouter = require("./routes/family")
const memberRouter = require("./routes/member")

const app = express();
app.use(express.json())


app.use('/auth', authRouter)
app.use("/family", familyRouter)
app.use("/member", memberRouter)





app.listen(3000, () => {
    console.log('server is running on port 3000')
});