exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
  }
};
