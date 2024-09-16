const express = require("express");
const router = express.Router();

const Sales = require("../models/sale");

//salesroute
router.get("/salesagent-form", (req, res) => {
    res.render("salesagent-form")
});
router.post("/salesagent-form", async (req, res) => {
    try {
        const newSale = Sales(req.body);
        await newSale.save();
        res.redirect("/salesagent-table");
    } catch (err) {
        res.status(400).render("salesagent-form");
        console.log("couldnt add sale", err);
    }
});

router.get("/salesagent-table", async (req, res) => {
    try {
        const sales = await Sales.find().sort({
            $natural: -1
        }); 
        res.render("salesagent-table", {title: "salesagent-table", sales: sales})
    } catch (err) {
        res.status(400).send("unable to find item");
    }

});


module.exports = router