var _ = require("lodash");
module.exports = {
  question: function(req, res, next){
    res.view('question',{
      layout: 'question',
      questions:[
        {
          title:'1.your sex is?',
          answer:[
            {
              key: 1,
              title:'male',
              target:''
            },
            {
              key: 2,
              title:'female',
              target:''
            } 
          ]
        },
        {
          title:'2.your age is?',
          answer:[
            {
              key: 1,
              title:'21~25',
              target:''
            },
            {
              key: 2,
              title:'25~30',
              target:''
            },
            {
              key: 2,
              title:'>30',
              target:''
            }  
          ]
        },
        {
          title:'3.your sex is?',
          answer:[
            {
              key: 1,
              title:'male',
              target:''
            },
            {
              key: 1,
              title:'female',
              target:''
            } 
          ]
        }
      ]
    })
    var num =_.sum(_.drop(_.values(req.query), 2));
    var name = req.query.userName;
    var tel = req.query.tel;
    sails.log.debug(req.query,num);
    if(num > 5){
      User.findOne({name: name, tel: tel})
      .exec(function(err, user){
        sails.log.debug(user);
        if(user){
          return
        }else{
          User.create({name: name, tel: tel})
          .exec(function(err, data){
          if(err){
            return res.serverError(err);
          }
          sails.log.info('create success');
          return
          })
        }
      })
    }
  },
}