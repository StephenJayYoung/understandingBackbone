﻿var ItemView = Backbone.View.extend({
  events: {},
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});