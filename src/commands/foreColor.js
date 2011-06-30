/**
 * document.execCommand("foreColor") will create either inline styles (firefox, chrome) or use font tags
 * which we don't want
 * Instead we set a css class
 */
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-color-[a-z]+/g;
  
  wysihtml5.commands.foreColor = {
    exec: function(element, command, color) {
      return wysihtml5.commands.formatInline.exec(element, command, "span", "wysiwyg-color-" + color, REG_EXP);
    },

    state: function(element, command, color) {
      return wysihtml5.commands.formatInline.state(element, command, "span", "wysiwyg-color-" + color, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);