const express = require('express')
const serveStatic = require("serve-static")
const path = require("path")
const {exec} = require("child_process")
const app = express()
const port = 8888

app.use(serveStatic(path.join(__dirname)))

app.listen(port, () => {
  console.log("Static file server running at http://localhost:" + port + "/\nCTRL + C to shutdown");
  exec(`open http://localhost:${port}`);
})
