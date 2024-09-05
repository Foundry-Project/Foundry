const express = require("express");
const cors = require("cors");
const { sequelize } = require("./Database/index");
const Userroutes = require('./Routes/UserRoutes')

const postRoute = require('./Routes/postroute')

const categoryRoute = require('./Routes/categoryroute')

const matchRoutes = require('./Routes/matchroute'); // Update this path to your routes fileconst notificationRoutes = require('./routes/notificationRoutes');
const notificationRoutes = require('./Routes/notificationroute');


const paymentRouter = require('./Routes/paymentroutes'); // Update this path to your routes file


const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded bodies


app.use('/User', Userroutes);

app.use('/notif',notificationRoutes)
app.use('/post', postRoute)

app.use('/category',categoryRoute)

app.use('/match',matchRoutes)

app.use('/payment',paymentRouter)




app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});