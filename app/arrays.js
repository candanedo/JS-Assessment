exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i ++) {
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var answer = [];
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i] !== item){
        answer.push(arr[i]);
      } 
    }
    return answer;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i --;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0 
    for (i = 0; i < arr.length; i ++) {
      if (arr[i] === item) {
        count ++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var dup = new Array();
    var currentDuplicate = 0;
    arr.sort();
    for (var i = 0; i < arr.length; i ++){
      if (arr[i] === arr[i + 1] && arr[i] !== currentDuplicate) {
        dup.push(arr[i]);
        currentDuplicate = arr[i];
      }
    }  
    return dup;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i ++) {
      arr[i] = arr[i]**2;
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var result = new Array();
    for(var i = 0; i < arr.length; i ++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};
