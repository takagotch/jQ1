$(function(){
//  $('.tab-menu li > a')
//  $('.tab-menu')
//  .on('click',function(){
//  .on('click', 'li > a', function(event){
	  event.preventDefault();
    var $this = $(this);
//
	$this.parent().siblings()
	  .removerClass('selected')
	  .end()
	  .addClass('selected');
//
	var tabId = $this.data('tabid');
	$this.closest('.tab').find('.tab-contents').children()
	.each(function(){
	var $content = $(this);
		if($content.data('contentid') == tabId){
		$content.removeClass('hidden');
		}else{
		$contetn.addClass('hidden');
		}
	});
  });
});


