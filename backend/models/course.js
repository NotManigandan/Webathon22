import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    code: String,
    name: String,
    lhours: Number,
    thours: Number,
    phours: Number,
    jhours: Number,
    credits: Number,
    wish: Number
});

const Course = mongoose.model('Course',courseSchema);

export default Course;