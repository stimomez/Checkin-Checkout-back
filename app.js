const express = require("express");

const { db } = require("./utils/database.util");

const { registrationsRouter } = require("./routes/registrations.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/registrations", registrationsRouter);

db.authenticate()
  .then(() => console.log("Db authenticated"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Db synced"))
  .catch((err) => console.log(err));

app.listen(3020, () => {
  console.log("Express app running!!");
});
