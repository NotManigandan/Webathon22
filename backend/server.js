import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import session from "express-session";
import User from "./models/user.js";
import failRoutes from "./routes/fail.js";
import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/upload.js";
import courseRoutes from "./routes/course.js";
import wishUploadRoutes from "./routes/uploadWish.js";
import facultyUploadRoutes from "./routes/uploadFaculty.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoutes);
app.use(failRoutes);
app.use(uploadRoutes);
app.use(courseRoutes);
app.use(wishUploadRoutes);
app.use(facultyUploadRoutes);

const CONNECTION_URL = process.env.DATABASE;
mongoose.connect(CONNECTION_URL);

const PORT = process.env.PORT || 5000;



app.listen(PORT, function(){
    console.log("Running on port "+ PORT);
})