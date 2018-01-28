$(document).on("click", ".page a", function(e){
  e.preventDefault();

  var href = $(this).attr("href");
  myRouter.navigate( href );
});

function createEnterFunc(path){
  return function enter($el, action, prev, next){
    return $.ajax({
      url: path,
      dataType: "html"
    }).then( function( d ){
     
      var content = $( d ).filter("article").find(".inner");
      $el.html( content );

      return action();
    });
  }
};

function leave($el, action){
  return $el.find(".inner")
    .fadeOut(300).promise()
    .then(function(){
      return action();
    });
}

myRouter.add();
myRouter.add();
myRouter.add();
myRouter.add();

$().detach();

myRouter.start();


