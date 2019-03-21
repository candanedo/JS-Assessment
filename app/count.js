exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
     for (var i = start; i <= end; i++){
     	return i;
     }
  }
};
