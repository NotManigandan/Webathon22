import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    eid: Number,
    name: String,
    desig: String,
    phone: Number,
    school: String,
    email: String
});

const Faculty = mongoose.model('Faculty',facultySchema);

export default Faculty;