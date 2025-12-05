const mongoose = require('mongoose');

let passportLocalMongoose = require('passport-local-mongoose');
// fix pro ESM verze – vezmeme default export, pokud existuje
if (passportLocalMongoose && passportLocalMongoose.default) {
  passportLocalMongoose = passportLocalMongoose.default;
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    birthday:  { type: Date,   required: true },
    gender: {
      type: String,
      required: true,
      enum: ['female', 'male', 'other'],
    },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, trim: true }
  },
  { timestamps: true }
);

// DŮLEŽITÉ: login používá email jako username
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
});

module.exports = mongoose.model('User', userSchema);
