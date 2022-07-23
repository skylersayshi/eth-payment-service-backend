import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    walletAddress: String,
    twitter: {
        type: String
    },
    bio: {
        type: String
    },
    followers: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    profilePic: String,
    city: String
});

const User = mongoose.model('User', userSchema);

export default User;