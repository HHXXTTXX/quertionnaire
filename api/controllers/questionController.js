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
          {title:' google', target:'8', val: 2}           
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
        title:'6.暗恋谁都快放假啊覅就爱上的发生法律敬爱的老师发空间按楼上的房间爱立方敬爱的老师付款就爱上的浪费空间大师傅?', 
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
          {title:'选项', target:'11', val: 1},           
          {title:'选项', target:'11', val: 1}           
          ]
      },
      question11: {
        title:'11.问题?',
        target: '13', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question12: {
        title:'12.问题?',
        target: '14', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question13: {
        title:'13.问题?',
        target: '50', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question14: {
        title:'14.问题?',
        target: '50', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },

    });
   
  },

  middlepage: function(req, res){
    res.view('middlepage', {
      layout: 'middlepage'
    })
    var num =_.sum(_.dropRight(_.flattenDeep(_.values(req.query)), 3));
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
  }
}