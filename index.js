const  Express  = require("express");
const { connection } = require("./database/db");
const {todoRoute}=require("./Routes/TotoRoute")
const cors = require("cors");
const { userRoute } = require("./Routes/UserRoute");

const app = Express();



app.use(Express.json())

app.use(cors())

app.use("/",todoRoute)
app.use("/",userRoute)

app.listen(8080, async() => {
    try{
        await connection;
        console.log("connected To DB successfully")
        console.log(`Listen Port On 8080`)
    }
    catch(err){
        console.log("Error connect to DB")
        console.log(err)

    }
    
    
})
