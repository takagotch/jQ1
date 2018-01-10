$(function(){
//  $('.tab-menu li > a')
//  $('.tab-menu')
//  .on('click',function(){
//  .on('click', 'li > a', function(event){
	  event.preventDefault();
    var $this = $(this);
	  $this.parent().siblings()
	  .removerClass('selected')
	  .end()
	  .addClass('selected');
  });
});

$(function(){
$('tab-menu')
.on('click', 'li > a', function(event){
event.prevent
}){}
});

