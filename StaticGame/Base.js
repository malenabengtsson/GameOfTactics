// every class that has a render method
// inherits from Base
// that keeps track of instance-ids (index in allInstance)
// this makes handling clicks and calling methods in 
// the correct object easy

export default class Base {

  static allInstances = [];

  static startClickListener() {
    // the click listener will check for on html elements
    // that have the attribute data-click
    // and decide what instance/object they belong to
    // and call the method you specify as a value of data-click
    document.body.addEventListener('click', event => {
      let element = event.target.closest('[data-click]');
      if (!element) { return; }
      let methodName = element.getAttribute('data-click');
      let instanceBaseElement = element.closest('[data-id]');
      if (!instanceBaseElement) { return; }
      let instanceId = +instanceBaseElement.getAttribute('data-id');
      let instance = Base.allInstances[instanceId];
      // call method in correct instance
      instance[methodName]();
    });
  }

  get id() {
    // returns the id of an instance for a class inheriting from Base
    // (same as index in Base.allInstances)
    return Base.allInstances.indexOf(this);
  }

  constructor() {
    if (Base.allInstances.length === 0) {
      // just start the click listener once
      Base.startClickListener();
    }
    Base.allInstances.push(this);
  }

}