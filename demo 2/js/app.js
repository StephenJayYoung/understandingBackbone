(function($){
    //everything within the backbone.view.extend is going to do the things
  var ListView = Backbone.View.extend({
    el: $('body'), // el attaches to existing element
//
    events: {
      'click button#add': 'addItem',
      'click button#delete': 'subtractItem',
      'click button#clear': 'clearItem'
    },

    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'subtractItem', 'clearItem'); // every function that uses 'this' as the current object should be in here

      this.counter = 0  ; // total number of items added thus far
      this.render();
    },

    render: function(){
      $(this.el).append("<button id='add'>Add the thing</button>");
      $(this.el).append("<button id='delete'>Subtract the thing</button>");
       $(this.el).append("<button id='clear'>Clear the thing</button>");
      $(this.el).append("<ul></ul>");
    },

    addItem: function(){
      this.counter++;
      $('ul', this.el).append("<li>Count"+this.counter+"</li>");
    },

    subtractItem: function(){
      this.counter--;
      $('ul', this.el).append("<li>Subtract"+this.counter+"</li>");
    },

    clearItem: function(){
      this.counter = 0;
      $('ul', this.el).append("<li>Clear"+this.counter+"</li>");
    }




  });

  var listView = new ListView();
})(jQuery);