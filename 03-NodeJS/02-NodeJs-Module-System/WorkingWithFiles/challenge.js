/* let sort = function (array) {
  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {

      if (array[i] > array[j + 1]) {
        const tmp = array[j + 1];
        array[j + 1] = array[i];
        array[i] = tmp;

      }
    }

  }
  return array;
}

let sub = function (a, b) {
  return a - b;
}
module.exports = {
  sort,
  sub,
} */
const fs = require('fs');
let getNotes = function () {
  const file = fs.openSync('notes.txt', 'r');
  return fs.readFileSync(file).toString();
}
module.exports = getNotes;