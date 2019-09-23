//* STANDARD SINGLETON
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Brad" });
    return object;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
