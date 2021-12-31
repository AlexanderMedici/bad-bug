// data from the models folder
const User = require('../models/user');

module.exports = {
  index,
  addPost,
  delPost,
  editPost
};


function index(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('/index.ejs', { 
      user: req.user, // req.user represents our currently logged-in user
      user, 
      name: req.query.name, 
      sortKey,
     });
  });
} 


async function addPost(req, res, next) {
   if (req.user) { 
    
    let obj = {
      text: req.body.text
    }
   
    
    req.user.posts.push(obj)
    await req.user.save()
    
    res.redirect('/user')
   }
}


async function delPost(req, res, next) {
  let user = await User.findById(req.user.id)
    user.posts.id(req.params.id).remove();
    user.save(function(err){
      res.redirect('/')
    
    });
  };

// check on this tommorow it should edit a post.

async function editPost(req, res, next) {
    console.log("your at edit post")
    let user = await User.findById(req.user.id)
      let update = user.posts.id(req.params.id)
        update .text = req.body.text
      console.log(update)
        user.save(function(err){
     res.redirect('/')
  }); 

  }




