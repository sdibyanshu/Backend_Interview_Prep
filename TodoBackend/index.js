require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const TodoRoute = require("./routes/todo");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/todos", TodoRoute);

app.get("/", (req, res) => res.send("Hello! Welcome to The Todo Backend"));
// app.get("/todo", (req, res) => res.send("Hello! Welcome to The Todo "));

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (error) {
    res.status(404).send(error.message);
  }

  console.log("server started on port 8080");
});
