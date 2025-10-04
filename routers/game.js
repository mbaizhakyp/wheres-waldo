const { Router } = require("express")
const gameRouter = Router();

gameRouter.get("/", (req, res) => {
    res.render("game");
});

module.exports = gameRouter;