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

const data = function (req, res) {
  const items = [
    { name: 'Swim', duration: 45, rating: 10 },
    { name: 'Run', duration: 20, rating: 7 },  
    { name: 'Gym', duration: 120, rating: 3 }
  ];

  res.render('data', { items });
};


module.exports = {
    layout,
    login,
    register,
    data
}