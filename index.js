const express = require("express");
const app = express();

app.get("/hello", (_, res) => {
  const currentTime = new Date().toLocaleString();
  console.log(`Request received at /hello: ${currentTime}`);
  console.log({ now: currentTime, name: "hello" });
  res.send("Hello, World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
