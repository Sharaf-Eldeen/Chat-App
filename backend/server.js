const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3001;

app.post("/authenticate", async (req, res) => {
  const username = req.body.username;

  try {
    let chatEnginRes = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "60503f04-22c9-48d1-9ac9-2cbe8e777698" } }
    );
    return res.status(chatEnginRes.status).json(chatEnginRes.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});
app.listen(PORT, (req, res) => {
  console.log(`Server listen to port ${PORT}`);
});
