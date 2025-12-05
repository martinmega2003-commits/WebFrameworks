const mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// compat: some builds export default
if (passportLocalMongoose && passportLocalMongoose.default) {
  passportLocalMongoose = passportLocalMongoose.default;
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    birthday: { type: Date, required: true },
    gender: {
      type: String,
      required: true,
      enum: ['female', 'male', 'other'],
    },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, trim: true },
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  iterations: 10000,
  keylen: 64,
  selectFields: 'hash salt',
});

module.exports = mongoose.model('User', userSchema);
