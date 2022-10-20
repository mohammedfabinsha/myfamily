const express = require('express')

const authRouter = require('./routes/auth')
const familyRouter = require("./routes/families")
const memberRouter = require("./routes/member")

const app = express();
app.use(express.json())


app.use('/api/auth', authRouter)
app.use("/api/families", familyRouter)
app.use("/api/member", memberRouter)





app.listen(3000, () => {
    console.log('server is running on port 3000')
});
