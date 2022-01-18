import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
})

export default mongoose.model('user', userSchema)