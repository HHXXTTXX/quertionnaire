module.exports = {
  question: function(req, res){
    res.view('question', {layout: 'question'})
  }
}