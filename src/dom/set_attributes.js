wysihtml5.dom.setAttributes = function(attributes) {
  return {
    on: function(element) {
      for (var i in attributes) {
        element.setAttribute(i, attributes[i]);
      }
    }
  };
};