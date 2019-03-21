exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var values = []
  	for (var prop in obj){
  		if (obj.hasOwnProperty(prop)){
  			values.push(prop + ': ' + obj[prop]);
  		}
  	}
  	return values;
  }
};
