import app from "./app.js";
import "dotenv/config";
import connectDB from "./configs/db.js";

const start = () => {
  connectDB();
  app.listen(process.env.PORT, () =>
    console.log(`server run on port ${process.env.PORT}`),
  );
};
start();
