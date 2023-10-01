const mongoose =require("mongoose")

const connectTODb = async() => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`connected to hostname ${conn.connectin.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}
module.exports=connectTODb