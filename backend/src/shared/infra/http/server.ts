import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();

mongoose.connect(
  "mongodb+srv://boltech-111:wpmongodbatlas@cluster0.okhvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => console.log("Connected to database!")
);
mongoose.set("useFindAndModify", false);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3030, () => console.info("Server is running!"));
