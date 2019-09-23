// Iterator Example
/* function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}
// Create an array of name
// Init iterator and pass in the names array
const names = nameIterator(namesArray); */

//Generator Example
/* function* sayNames() {
  yield "Jack"; // return Jack in the first call
  yield "Jill"; // return JIll in the secondcall
  yield "John"; // return John in the third call
  //return undefined after any other call
}
const name = sayNames();
console.log(name.next()) */ // ID Creator

// Keep creating unique IDS in each call
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
