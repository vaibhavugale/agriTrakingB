// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { getSpiceDetails, createFarm } = require('./controller/spicesController');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/spice-details",getSpiceDetails);
app.post("/create-farm",createFarm);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(() => console.log("DB Connected Successfully"))
.catch( (error) => {
    console.log("DB Connection Failed");
    console.error(error);
    process.exit(1);
} )


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
