class EventTarget {
  constructor() {
    this.listener = {};
  }

  addEventListener(name, callback) {
    // We will creae a Set to remove duplicacy of callbacks.
    if (!this.listener.hasOwnProperty(name)) {
      this.listener[name] = new Set([callback]);
    } else {
      this.listener[name].add(callback);
    }
  }

  removeEventListener(name, callback) {
    // Remove the callback from Set.
    this.listener[name]?.delete(callback);
  }

  dispatchEvent(name) {
    // Here loop through all the registered callbacks for any event and exxecute it.
    // Ex. for any 'click' event 2 callbacks are registeres, fn1,fn2. Here both will get executed.
    this.listener[name]?.forEach((callback) => {
      callback();
    });
  }
}

let x = new EventTarget();

x.addEventListener("click", () => {
  console.log("clicked");
});

x.dispatchEvent("click");
