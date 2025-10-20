const layout = function(req, res){
  res.render('layout', { title: 'Test' });
};

const login = function(req,res){
    res.render('login');
};

const register = function(req,res){
    res.render('register')
}

const data = function(req, res){
    res.render('data')
}

module.exports = {
    layout,
    login,
    register,
    data
}