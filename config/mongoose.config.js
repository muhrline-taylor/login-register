const mongoose = require("mongoose");

// THE jokes_db IN THIS LINK IS THE NAME OF DATABASE TO USE
mongoose.connect("mongodb://localhost/advancedUsers_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongoose found"))
    .catch(() => console.log("Mongoose not found!"))