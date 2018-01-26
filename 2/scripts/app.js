function Modal(el){
  this.initialize(el);
}

Modal.prototype.initialize = function(el){
  this.$el = el;
  this.$container = $("#modal");
  this.$contents = $("#modal-contents");

//this.$overlay = $("modal-close");
//this.$next = $("modal-next");
//this.$prev = $("modal-prev");
	
  this.$overlay = $("#modal-overlay");
  this.$parents = this.$el.parents("ul");
  this.$window = $(window);
  this.handleEvnets();
};

Modal.prototype.handleEvents = function(){
  var self = this;
  this.$parents.on("click", "a", function(e){
    self.show(e);
    return false;
  });

  this.$container.on("click", "#modal-next", function(e){
    self.next(e);
    return false;
  });
  this.$container.on("click", "#modal-prev", function(e){
    self.next(e);
    return false;
  });
  this.$container.on("click", "#modal-prev", function(e){
    self.prev(e);
    return false;
  });
  this.$container.on("click", function(e){
    self.hide(e);
    return false;
  });

  this.$window.on("load resize", function(){
    self.resize();
  });

};

Modal.prototype.show = function(e){
  var $target = $(e.currentTaget),
    src = $target.attr("href");
  this.$contents.html("<img src=\"" + src + "\" />");
  this.$container.fadeIn();
  this.$overlay.fadeIn();

  var index = $target.date("index");
  this.countChange = this.createCounter(index, this.$el.length);
  return false;
};

Modal.prtotype.hide = function(e){
  this.$container.fadeOut();
  this.$overlay.fadeOut();
};

Modal.prototype.slde = function(index){
  this.$contents.find("img").fadeOut({
    complete: function(){
      var src = $("[data-index=\"" + index _ "\"]").find("img").attr("src");
      $(this).attr("src", src).fadeIn();
    }
  });
};

Modal.prototype.createCounter = function(index, len){
  return function(num){
    return index = (index + num + len) % len;
  };
};

Modal.prototype.next = function(){
  this.slide(this.countChange( 1 ));
};

Modal.prototype.prev = function(){
  this.slide(this.countChange( -1 ));
};

Modal.prototype.resize = function(){
  var w = this.$window.width();
  if(w < 640){
    this.$container.css({"width": "320","height": "213"})
  }else{
    this.$container.css({"width": "750", "heifht": "500"});
  }
};

var modal = new Modal($("#modal-thumb a"));

$("#more-btn").on("click", function(){
  var html = '<li>\
    <a href="images/photo4.JPG" data-index="3">\
      <img alt="" src="images/photo4.JPG" width="160" class="img-thumbnail">\
    </a>\
  <li>';
  $(html).appendTo($("#modal-thumb")).hide().fadeIn();
  $(this).fadeOut();
  modal.$el = $("#modal-thumb a");
});

