import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        dafault: Date.now
    }
})

const todo = mongoose.model('todo', todoSchema);

export default todo;