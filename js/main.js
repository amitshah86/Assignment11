(function(){

var pb = $("#itemTemplate").html();
var render = _.template(pb);

window.Spencer = {
  fullName: "Spencer Wyckoff",
  age: 27,
  TIYGraduate: true,
  Shoe: {
    size: 13,
    laces: true,
  }
};

_.each(etsy.results, function(result) {
  console.log(result);
  var itemHTML = render(result);
  console.log(itemHTML);
  $('.rightContainer').append(itemHTML);
});



})();