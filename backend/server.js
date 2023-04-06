import router from "./path/root-of.js";
import express from 'express'
import cors from 'cors'


export const app = express();


const port = 3270;
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/root_of", router);


app.listen(port, () => {
  console.log("Runnning on " + port);
});