Template.DocSearchTemplate.helpers({
  c_Doc: function() {
    return Doctor.find();
  }
});
Template.DocSearchTemplate.rendered = function(){
	console.log(this);
}

