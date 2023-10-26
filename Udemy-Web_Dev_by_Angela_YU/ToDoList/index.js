import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let mess = "";
let alert = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    toDo: toDoList,
    message: mess,
    alertVal: alert,
  });
  message = "";
});

app.post("/", (req, res) => {
  const chore = req.body["chores"].trim();
  if (chore) {
    toDoList.push(chore);
    alert = "success";
    mess = "Successfully added " + chore + " to the list.";
  } else {
    alert = "danger";
    mess = "Invalid Input";
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

var toDoList = ["Laundry", "clean"];
