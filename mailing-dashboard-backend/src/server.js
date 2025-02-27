const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Mailing Dashboard Backend");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const emailRoutes = require("./routes/emailRoutes");

app.use("/api", emailRoutes);