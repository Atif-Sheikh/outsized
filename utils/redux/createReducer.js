let deepFreeze = _ => {};
if (!__PROD__) {
  deepFreeze = o => {
    if (!o || Object.isFrozen(o)) {
      return;
    }
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(prop => {
      if (
        Object.prototype.hasOwnProperty.call(o, prop) &&
        (typeof o[prop] === "object" || typeof o[prop] === "function")
      ) {
        deepFreeze(o[prop]);
      }
    });
  };
}

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (!__PROD__) {
      deepFreeze(state);
    }
    if (handlers.hasOwnProperty(action.type)) {
      const newState = handlers[action.type](state, action.payload);
      if (!__PROD__) {
        deepFreeze(newState);
      }
      return newState;
    } else {
      return state;
    }
  };
}
