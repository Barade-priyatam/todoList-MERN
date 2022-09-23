import mongoose from "mongoose";


const Connection = () => {

    const URL = "mongodb+srv://admin-priyatam:Test-123@cluster0.0yomq4w.mongodb.net/TodoListDB?retryWrites=true&w=majority";

    mongoose.connect(URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("Database Connected Successfully");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log("Error while connecting", error.message);
    })
}

export default Connection;
