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
        title:'1.你的性别是?', 
        options:[
          {title:'男', target:'2', val: 2},
          {title:'女', target:'2', val: 2}
          ]
      },
      question2: {
        title:'2.你的年龄?', 
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
        title:'4.遇到问题的解决方法?', 
        options:[           
          {title:'百度', target:'7', val: -1},           
          {title:'必应', target:'8', val: 1},
          {title:'google', target:'8', val: 2}           
          ]
      },
      question5: {
        title:'5.是否有过相关工作经验?', 
        options:[           
          {title:'有', target:'6', val: 1},           
          {title:'没有', target:'9', val: 1}           
          ]
      },
      question6: {
        title:'6.?', 
        options:[           
          {title:'选项', target:'10', val: 1},           
          {title:'选项', target:'8', val: 1}           
          ]
      },
      question7: {
        title:'7.问题?', 
        options:[           
          {title:'选项', target:'8', val: 1},           
          {title:'选项', target:'9', val: 1}           
          ]
      },
      question8: {
        title:'8.问题?', 
        options:[           
          {title:'选项', target:'9', val: 1},           
          {title:'选项', target:'10', val: 1}           
          ]
      },
      question9: {
        title:'9.问题?', 
        options:[           
          {title:'选项', target:'10', val: 1},           
          {title:'选项', target:'10', val: 1}           
          ]
      },
     
       question10: {
        title:'10.问题?', 
        options:[           
          {title:'选项', target:'50', val: 1},           
          {title:'选项', target:'50', val: 1}           
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
          return;
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

  middlepage: function(req, res){
    res.view('middlepage', {
      layout: 'middlepage'
    })
  }
}