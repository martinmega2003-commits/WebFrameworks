const mongoose = require('mongoose');
const Location = mongoose.model('Location')


const layout = function(req, res){
  res.render('layout', { title: 'Test' });
};

const login = function(req,res){
    res.render('login', { email: '123@gmail.com', password: '123'});
};

const register = function(req,res){
    res.render('register', { FirstName: 'Martin',
        LastName: 'Mega',
        Birthday: '123456',
        sex: 'male',
        email: '123@gmail.com',
        PhoneNumber: 7856458754

    });
}

const data_workout = async (req, res) => {
  try {
    const items = await Location.find({}).lean();
    res.render('data_workout', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
};




module.exports = {
    layout,
    login,
    register,
    data_workout,
}