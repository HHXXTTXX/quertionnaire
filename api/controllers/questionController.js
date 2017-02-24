var _ = require("lodash");
module.exports = {
  question: function(req, res, next){
    res.view('question', {
      layout: 'question',
      user:{
        username:'',
        tel:''
      },
      question1: {
        title:'1.your sex is?', 
        options:[
          {title:'male', target:'50', val: 1},
          {title:'female', target:'50', val: 1}
          ]
      },
      question2: {
        title:'2.your age is?', 
        options: [
          {title: '20~25', target: "3", val: 1},
          {title: '25~30', target: "3", val: 1},
          {title: '30以上', target: "3", val: 1}
          ]
      },
      question3: {
        title:'3.是否拥有github账号', 
        options:[           
          {title:'是', target:'4', val: 1},           
          {title:'否', target:'5', val: 1}           
          ]
      },
      
      question4: {
        title:'4.your sex is?', 
        options:[           
          {title:'male', target:'7', val: 1},           
          {title:'male', target:'8', val: 1}           
          ]
      },
     
      question5: {
        title:'5.your sex is?', 
        options:[           
          {title:'male', target:'6', val: 1},           
          {title:'male', target:'9', val: 1}           
          ]
      },
      
      question6: {
        title:'6.your sex is?', 
        options:[           
          {title:'male', target:'10', val: 1},           
          {title:'male', target:'8', val: 1}           
          ]
      },
     
      question7: {
        title:'7.your sex is?', 
        options:[           
          {title:'male', target:'8', val: 1},           
          {title:'male', target:'9', val: 1}           
          ]
      },
      
      question8: {
        title:'8.your sex is?', 
        options:[           
          {title:'male', target:'9', val: 1},           
          {title:'male', target:'10', val: 1}           
          ]
      },
     
      question9: {
        title:'9.your sex is?', 
        options:[           
          {title:'male', target:'10', val: 1},           
          {title:'male', target:'10', val: 1}           
          ]
      },
     
       question10: {
        title:'10.your sex is?', 
        options:[           
          {title:'male', target:'50', val: 1},           
          {title:'male', target:'50', val: 1}           
          ]
      },
    });
    var num =_.sum(_.dropRight(_.values(req.query), 3));
    var name = req.query.userName;
    var tel = req.query.tel;
    var email = req.query.email;
    sails.log.debug(req.query,num);
    if(num > 1){
      User.findOne({name: name, tel: tel, email: email})
      .exec(function(err, user){
        sails.log.debug(user);
        if(user){
          return 
        }else{
          User.create({name: name, tel: tel, email: email})
          .exec(function(err, data){
            if(err){
              return res.serverError(err);
            }
            sails.log.info('create success');
            return res.ok();
          })
        }
      })
    }
  },
}