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












