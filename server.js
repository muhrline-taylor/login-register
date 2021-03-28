const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());

    // HANDLING POST REQUESTS
app.use(express.json(), express.urlencoded({extended: true}));

    // CONNECT TO CONFIG FILE
require("./config/mongoose.config")

    // CONNECT TO ROUTES AND PASS IT TO MY APP
require("./routes/advancedUsers.routes")(app)

app.listen(port, () => console.log(`MERN_PORT: ${port}`))