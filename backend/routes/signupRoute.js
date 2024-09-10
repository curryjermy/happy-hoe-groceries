const express = require("express");
const passport = require("passport");
const router = express.Router();
const Khari = require("../models/signup");

router.get("/signup", (req, res)=>{
    res.render("signup-login")
});
router.post("/signup", async (req, res)=>{
    try{  
        const existingUser = await khari.findone({email: req.body.email});
        if (existingUser) {
            return res
            .status(400)
            .send("oops user not found user with similar email already exists");
        }
        const user = new Khari(req.body);
        await Khari.register(user, req.body.password, (error)=>{
            if (error){
                throw error;
            }
            res.redirect("/login");
        });

    
    } catch(error){
        res.status(400).render("signup-login");
        console.log("oops signup error", error);
    }

});

router.get("/login", (req, res)=>{
    res.render("signup-login")
});
router.post("/login",
    passport.authenticate("local", {failureRedirect: "/login"}),
    (req, res)=>{
        req.session.user = req.user;
        if (req.user.role === "manager"){
            res.redirect("/dashboard")
        }
        else if (req.user.role === "Salesagent"){
            res.redirect("/salesagent-dashboard")
        }
        else {res.send ("user doesn't exist")}
    }
)

module.exports = router;






