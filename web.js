import express from "express"
import authRoutes from "./routes/auth.js"
import memberRoutes from "./routes/members.js"
import locationRoutes from "./routes/locations.js"
import hintRoutes from "./routes/hints.js"
import recordRoutes from "./routes/records.js"
import rankRoutes from "./routes/ranks.js"
import cookieParser from "cookie-parser"
import cors from "cors";



const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/members",memberRoutes);
app.use("/api/location",locationRoutes);
app.use("/api/hint",hintRoutes);
app.use("/api/record",recordRoutes);
app.use("/api/rank",rankRoutes);

app.listen(8001, ()=>{
    console.log("Connected to!");
})