const express = require("express");
const homeRouter = require("./routers/home");
const app = express();
const { join } = require("path");
const path = require("path");
const gameRouter = require("./routers/game")


app.use(express.urlencoded({ extended: true }));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRouter);
app.use("/game", gameRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});