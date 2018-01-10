$(function(){
  $('.tab-menu li > a')
  .on('click',function(){
    var $this = $(this);
	  $this.parent().siblings()
	  .removerClass('selected')
	  .end()
	  .addClass('selected');
  });
});

