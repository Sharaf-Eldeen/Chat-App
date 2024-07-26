const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req, res) => {
  console.log(`Server listen to port ${PORT}`);
});
