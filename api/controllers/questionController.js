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
        id: '1', 
        options:[
          {title:'男', target:'2', val: 2},
          {title:'女', target:'11', val: 2}
          ]
      },
      question2: {
        title:'2.你的年龄?',
        id: '2', 
        options: [
          {title: '20~25', target: "3", val: 1},
          {title: '25~30', target: "3", val: 1},
          {title: '30以上', target: "3", val: 1}
          ]
      },
      question3: {
        title:'3.是否拥有github账号',
        id: '3', 
        options:[           
          {title:'是', target:'4', val: 1},           
          {title:'否', target:'5', val: 1}           
          ]
      },
      question4: {
        title:'4.遇到问题的解决方法?', 
        id: '4',
        options:[           
          {title:'百度', target:'7', val: -1},           
          {title:'必应', target:'8', val: 1},
          {title:' google', target:'8', val: 2}           
          ]
      },
      question5: {
        title:'5.是否有过相关工作经验?', 
        id: '5',
        options:[           
          {title:'有', target:'6', val: 1},           
          {title:'没有', target:'9', val: 1}           
          ]
      },
      question6: {
        title:'6.暗恋谁都快放假啊覅就爱上的发生法律敬爱的老师发空间按楼上的房间爱立方敬爱的老师付款就爱上的浪费空间大师傅?',
        id: '6', 
        options:[           
          {title:'选项', target:'10', val: 1},           
          {title:'选项', target:'8', val: 1}           
          ]
      },
      question7: {
        title:'7.问题?',
        id: '7', 
        options:[           
          {title:'选项', target:'8', val: 1},           
          {title:'选项', target:'9', val: 1}           
          ]
      },
      question8: {
        title:'8.问题?', 
        id: '8',
        options:[           
          {title:'选项', target:'9', val: 1},           
          {title:'选项', target:'10', val: 1}           
          ]
      },
      question9: {
        title:'9.问题?',
        id: '9', 
        options:[           
          {title:'选项', target:'10', val: 1},           
          {title:'选项', target:'10', val: 1}           
          ]
      },
     
      question10: {
        title:'10.问题?',
        id: '10', 
        options:[           
          {title:'选项', target:'11', val: 1},           
          {title:'选项', target:'11', val: 1}           
          ]
      },
       question11: {
        title:'11.问题?',
        id: '11', 
        options:[           
          {title:'选项', target:'11', val: 1},           
          {title:'选项', target:'12', val: 1}           
          ]
      },
      question12: {
        title:'12.问题?',
        id: '12', 
        options:[           
          {title:'选项', target:'13', val: 1},           
          {title:'选项', target:'13', val: 1}           
          ]
      },
      question13: {
        title:'13.问题?',
        id: '13', 
        options:[           
          {title:'选项', target:'14', val: 1},           
          {title:'选项', target:'14', val: 1}           
          ]
      },
      question14: {
        title:'14.问题?',
        id: '14', 
        options:[           
          {title:'选项', target:'15', val: 1},           
          {title:'选项', target:'15', val: 1}           
          ]
      },
      question15: {
        title:'15.问题?',
        id: '15', 
        options:[           
          {title:'选项', target:'16', val: 1},           
          {title:'选项', target:'16', val: 1}           
          ]
      },
        question16: {
        title:'16.问题?',
        id: '16', 
        options:[           
          {title:'选项', target:'17', val: 1},           
          {title:'选项', target:'17', val: 1}           
          ]
      },
      question17: {
        title:'17.问题?',
        id: '17', 
        options:[           
          {title:'选项', target:'18', val: 1},           
          {title:'选项', target:'18', val: 1}           
          ]
      },
      question18: {
        title:'18.问题?',
        id: '18', 
        options:[           
          {title:'选项', target:'19', val: 1},           
          {title:'选项', target:'19', val: 1}           
          ]
      },
      question19: {
        title:'19.问题?',
        id: '19', 
        options:[           
          {title:'选项', target:'20', val: 1},           
          {title:'选项', target:'20', val: 1}           
          ]
      },
      question20: {
        title:'20.问题?',
        id: '20', 
        options:[           
          {title:'选项', target:'21', val: 1},           
          {title:'选项', target:'21', val: 1}           
          ]
      },
      question21: {
        title:'21.问题?',
        target: '22',
        id: '21', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question22: {
        title:'22.问题?',
        target: '23',
        id: '22', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question23: {
        title:'23.问题?',
        target: '24',
        id: '23', 
        options:[           
          {title:'选项', val: 1},
          {title:'选项', val: 1}, 
          {title:'选项', val: 1}, 
          {title:'选项', val: 1},            
          {title:'选项', val: 1}           
          ]
      },
      question24: {
        title:'24.问题?',
        target: '50',
        id: '24', 
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
          return res.view('fail', {layout: 'fail'});
        }else{
          User.create({name: name, tel: tel, email: email})
          .exec(function(err, data){
            if(err){
              return res.serverError(err);
            }
            sails.log.info('create success');
            return  res.view('middlepage', {layout: 'middlepage'});
          })
        }
      })
    }
  }
}