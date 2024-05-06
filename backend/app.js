import express from 'express';
import mongoose from 'mongoose'
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose.connect("mongodb+srv://bhardwajkirti17:LzK3aYICpbXhy3rA@cluster0.pszzbi9.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>app.listen(4000))
.then(()=>
    console.log("Connected to Database and Listening to 4000")
)
.catch((err) => console.log(err));

// app.listen(4000);
