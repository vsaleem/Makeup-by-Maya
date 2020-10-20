import mongoose from 'mongoose'

// Setting user requirements
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false
    }

}, 
//Pass in second arguement for timestamps
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User