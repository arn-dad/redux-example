export const createStore = (reducers) => {
  let s = {};
  const keys = Object.keys(reducers);
  let listeners = [];


  const dispatch = (a) => {
    s =  keys.reduce((acc, k, i) => {
      acc[k] = reducers[k](s[k], a)
      return acc
    }, {})

    listeners.forEach((l) => {
      l()
    })
  }

  
  const subscribe = (callback) => {
    listeners.push(callback)
    return () => {
      listeners = listeners.filter(l => l !== callback)
    } 
  }
  
  dispatch({ type: '@@INIT' })
  return {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: () => s
  }
}
