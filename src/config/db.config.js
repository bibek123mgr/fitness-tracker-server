const { default: mongoose } = require("mongoose");
const { MONGO_URL } = require("./index.js")

async function connectToMongoDb() {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Conntected to database")
    }catch(err){
         console.error(err)
    }
}

module.exports = connectToMongoDb