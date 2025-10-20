const mongoose = require('mongoose');

const dbURI = "mongodb+srv://Martin:123@cluster0.rrkvlzj.mongodb.net/Loc8r?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
  .then(() => console.log("✅ Mongoose is connected"))
  .catch((err) => console.error("❌ Connection error:", err));

require('./locations');
