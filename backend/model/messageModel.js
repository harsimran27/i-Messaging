const mongoose = require("mongoose");
const { DB_LINK } = require("../secret");

mongoose.connect(DB_LINK).then(function () {
    console.log("database is connected");
}).catch(function (err) {
    console.log(err);
})

const iMessageSchema = new mongoose.Schema({

    channel: {
        name: String,
        description: String,
        tags : [String],
    },
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String,
            }
        }
    ]

})

const iMessageModel = mongoose.model("iMessageModel", iMessageSchema);
module.exports = iMessageModel;