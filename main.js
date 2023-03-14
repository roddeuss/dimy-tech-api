require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
const db = mongoose.connection;

app.use(express.urlencoded({extended: false}));
app.use(express.json());


db.on('error', (error) => console.log(error));
db.once("open", () => console.log("connected to the database!"));

app.use('/transaksi', router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
