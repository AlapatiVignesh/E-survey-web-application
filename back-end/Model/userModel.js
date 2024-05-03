const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        index: true
    },
    name: {
        type: String,
        required: [true, "A user must have a name"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "A user must have an email"]
    },
    password: {
        type: String,
        required: [true, "A user must create a password"]
    },
    phoneNumber: {
        type: String
    },
    uid: {
        type: String,
        unique: true, // Ensure uniqueness of the uid field
        required: [true, "A user must have a UID"]
    }
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema, "users");
module.exports = userModel;