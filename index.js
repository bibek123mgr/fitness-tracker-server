const app = require("./src/app");
const {PORT}=require("./src/config/index.js")

const port=PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port: ${PORT}`);
});