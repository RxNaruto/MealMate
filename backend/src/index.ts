import express from "express"
import cors from "cors"
import userRouter from "./routes/user";
import foodRouter from "./routes/food";
const app = express();

app.use(express.json());
app.use('/t',userRouter);
app.use('/f',foodRouter);
app.listen(3000);