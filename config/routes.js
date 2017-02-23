/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'index',
    user:{
      name: '123'
    }
  },
  'get /question': {
    view: 'question',
    locals: {
      layout: 'question',
      question1: {
        title:'1.your sexy is?', 
        options:[
          {title:'male', target:''},
          {title:'female', target:''}
          ]
      },
      question2: {
        title:'2.your age is?', 
        options: [
          {title: '20~25', target: "1"},
          {title: '25~30', target: "2"},
          {title: '30以上', target: "3"}
          ]
      },
      question3: {
        title:'3.是否拥有github账号', 
        options:[           
          {title:'是', target:''},           
          {title:'否', target:''}           
          ]
      },
      
      question4: {
        title:'4.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
     
      question5: {
        title:'5.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
      
      question6: {
        title:'6.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
     
      question7: {
        title:'7.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
      
      question8: {
        title:'8.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
     
      question9: {
        title:'9.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
     
       question10: {
        title:'10.your sexy is?', 
        options:[           
          {title:'male', target:''},           
          {title:'male', target:''}           
          ]
      },
      
    }
  }
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
