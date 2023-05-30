const Express = require("express");
const mongoose = require("mongoose");


const connection=mongoose.connect("mongodb+srv://rupeshsahu:Rupeshsahu%401234@cluster0.2urlqvt.mongodb.net/Todoapp?retryWrites=true&w=majority")
const cors = require("cors");
const { todoRoute } = require("./Routes/TotoRoute");
const { userRoute } = require("./Routes/UserRoute");

const app = Express();
app.use(Express.json());

app.use(cors());



app.get("/", async (req, res) => {
  
  res.send("Hello");
});

app.use("/",todoRoute)
app.use("/",userRoute)


app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected To DB successfully");
    console.log(`Listen Port On 8080`);
  } catch (err) {
    console.log("Error connect to DB");
    console.log(err);
  }
});
