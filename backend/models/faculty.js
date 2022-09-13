import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    slno: Number,
    eid: Number,
    name: String,
    desig: String,
    phone: Number,
    school: String,
    email: String
});

const Faculty = mongoose.model('Faculty',facultySchema);

export default Faculty;