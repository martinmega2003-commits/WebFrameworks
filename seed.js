// seed.js
const mongoose = require('mongoose');

// ✅ 1. Načti model — uprav CESTU podle tvé struktury složek
require('./app_server/models/location');  // ← musí odpovídat názvu souboru s modelem

// 2. Připojení k databázi (Atlas)
const dbURI = "mongodb+srv://Martin:123@cluster0.rrkvlzj.mongodb.net/Loc8r?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  try {
    // ✅ 3. Připoj se
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    // 4. Získej model
    const Location = mongoose.model('Location');

    // 5. Vymaž stará data a nahraj nová
    await Location.deleteMany({});
    await Location.insertMany([
      { name: 'Swim', duration: 45, rating: 10 },
      { name: 'Run', duration: 20, rating: 7 },
      { name: 'Gym', duration: 120, rating: 3 }
    ]);

    console.log('✅ Data uploaded successfully!');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  } finally {
    // 6. Odpoj se
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

run();
