$.tmpl("<li>${Name}</li>", { "Name" : "tk" }).appendTo("#target");

$.tmpl(myTemplate, myData).appendTo("#target");

//
var movies = [
  { Name: "", ReleaseYear: "" },
  { Name: "", ReleaseYear: "" },
  { Name: "", ReleaseYear: "" }
];
var markup = "<li><b>${Name}</b>(${ReleaseYear})</li>"
  $.template("movieTemplate", markup);
  $.tmpl("movieTemplate", movie)
    .appendTo( "#movieList" );


//
var markup = "";
  $.template("", markup);
  $.ajax({
    dataType: "jsonp",
    url: moviesSErviceUrl,
    jsonp: "$callback",
    success: showMovies
  });
  function showMovies( data ){
    $.templ( "movieTemplate", data )
	  .appendTo( "#movieList" );
  }


//
var markup = "<li>Some content: ${$item.myMethod()}.<br/>"
    +" More content: ${$item.myValue}.</li>";
  $.template( "movieTemplate", markup );
  $.tmpl( "movieTemplate", movies,
	  {
	    myValue: "somevalue",
	    myMethod: function(){
	      return "something";
	    }
	  }
  ).appedTo( "#movieList" );



