module.exports = function(arr) {
  var result = [];

  for (var n = 0; n < arr.length; n++) {
    var cur = arr[n];
    if (result.length === 0) {
      for (var i = 0; i < cur.length; i++) {
        result[i] = [cur[i]];
      }
      continue;
    }

    var temp = [];
    for (var j = 0; j < result.length; j++) {
      var el = result[j];

      for (var k = 0; k < cur.length; k++) {
        temp.push(el.concat(cur[k]));
      }
    }
    result = temp;
  };

  return result;
};
