const express = require('express');
const userRoutes = require('./src/user/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi")
})

app.use('/auth', userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));