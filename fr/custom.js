$(function(){
  $('.tab-menu li > a')
  .on('click',function(){
	  event.preventDefault();
    var $this = $(this);
	  $this.parent().siblings()
	  .removerClass('selected')
	  .end()
	  .addClass('selected');
  });
});

