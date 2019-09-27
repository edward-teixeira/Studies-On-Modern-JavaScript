// Basic structure
/* (function() {
  // Declare private vars and functions

  return {
    //Declare public var and functions
  }
})() */

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = "Hello World";

  const changeText = () => {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  return {
    callChangeText: () => {
      changeText();
      console.log(text);
    }
  };
})();
//UICtrl.callChangeText();
//UICtrl.changeText();

//*REVEALING MODULE PATTERN
// Directly reveal data inside modules;
const ItemCtrl = (function() {
  let data = []; // Private variable

  function add(item) {
    data.push();
    console.log("Item Added...");
  }
  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();
/* ItemCtrl.add({ id: 1, name: "John" });
console.log(ItemCtrl.get(1)); */
