// 11.3.3. Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

//11.3.3. Convert to an "arrow function"
doubleAddition = (c, d) => addition(c, d) * 2;