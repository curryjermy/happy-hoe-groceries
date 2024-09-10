const express = require("express");
const passport = require("passport");
const router = express.Router();


router.get("/produce-procured", (req, res) => {
    res.render("produce-procured");
});

router.get("/charts", (req, res) => {
    res.render("chart");
});

router.get("/produce-sold", (req, res) => {
    res.render("produce-sold");
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

router.get("/landingpage", (req, res) => {
    res.render("landingpage");
});


router.get("/stock-view", (req, res)=>{
    res.render("stock")
});

router.get("/signup", (req, res)=>{
    res.render("signup-login")
});

router.get("/login", (req, res)=>{
    res.render("login")
})

router.get("/salesagent-form", (req, res)=>{
    res.render("salesagent-form")
});

router.get("/salesagent-dashboard", (req, res)=>{
    res.render("salesagent-dashboard")
});

router.get("/salesagent-table", (req, res)=>{
    res.render("salesagent-table")
});










module.exports = router;