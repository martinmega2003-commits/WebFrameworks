const layout = function(req, res){
  res.render('layout', { title: 'Test' });
};

const login = function(req,res){
    res.render('login');
};

const register = function(req,res){
    res.render('register')
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