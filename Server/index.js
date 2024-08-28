const express = require("express");
const cors = require("cors");
const { sequelize } = require("./Database/index");
const Userroutes = require('./Routes/UserRoutes')



const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/User', Userroutes);



app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});