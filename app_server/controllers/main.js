const mongoose = require('mongoose');
const Location = mongoose.model('Location');
const User = mongoose.model('User');
const passport = require('passport');

// GET /
const layout = (req, res) => {
  res.render('layout');
};

// GET /login
const loginGet = (req, res) => {
  res.render('login', { user: req.user, error: req.flash ? req.flash('error') : null });
};

const loginPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await User.authenticate()(email, password);
    if (!result.user) return res.status(401).json({ error: result.error?.message || 'Login failed' });
    return res.json({ ok: true, user: result.user.email });
  } catch (err) {
    return next(err);
  }
};

const registerPost = async (req, res) => {
  try {
    const { FirstName, LastName, Birthday, gender, email, phone, password } = req.body;
    const user = new User({
      username: email,
      firstName: FirstName,
      lastName: LastName,
      birthday: new Date(Birthday),
      gender,
      email,
      phone
    });

    await User.register(user, password);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};


const data_workout = async (req, res) => {
  try {
    const items = await Location.find({}).lean();
    res.render('data_workout', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
};

// Simple JSON API for Angular app
const apiLocations = async (req, res) => {
  try {
    const items = await Location.find({}).lean();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
};

module.exports = {
  layout,
  loginGet,
  loginPost,
  registerPost,
  data_workout,
  apiLocations,
};
