// const express = require("express")
// const cors = require("cors")

// const app = express()

// app.use(express.json())
// app.use(cors())

// app.get("/", (req, res) => {
//   res.send("Welcome To Our Online Shopping Api...")
// })

// app.listen(5000, console.log("Server Running On Port 5000"))

const express = require("express");
const cors = require("cors");

const product = require("./product");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Our Online Shopping Api...");
});

app.get("/product", (req, res) => {
  res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server Running On Port ${port} `);
});
