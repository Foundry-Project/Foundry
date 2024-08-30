const express = require("express");
const cors = require("cors");
const { sequelize } = require("./Database/index");
const postRoute = require('./Routes/postroute')
const userRoute = require('./Routes/userRoute')
const categoryRoute = require('./Routes/categoryroute')


const PORT = 3000;
const app = express();
app.use(cors());

app.use(express.json());

app.use('/post', postRoute)
app.use('/User', userRoute);
app.use('/category',categoryRoute)




app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});