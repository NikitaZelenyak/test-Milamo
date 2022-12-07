const express = require("express");
const cors = require("cors");
const app = express();

const guestRouter = require("./routes/api/guests");
const staffRouter = require("./routes/api/staffs");
const serviceRouter = require("./routes/api/services");
app.use(cors());
app.use(express.json());

app.use("/api/guests", guestRouter);
app.use("/api/staffs", staffRouter);
app.use("/api/services", serviceRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
