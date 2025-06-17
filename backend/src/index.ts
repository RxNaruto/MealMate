import express from "express"
import cors from "cors"
import userRouter from "./routes/user";
const app = express();

app.use(express.json());
app.use('/t',userRouter);
app.listen(3000);