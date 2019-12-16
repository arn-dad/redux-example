import { createStore } from './redux';
import { todosReducer, eventsReducer } from './reducers';

const store = createStore({ 
  todosState: todosReducer,
  eventsState: eventsReducer  
  });

const firstUnsubscribe = store.subscribe(() => {
  const s = store.getState()
  let content = '';
  Object.keys(s).forEach(k => {
    content += `<h1><b>${k}:</b><span class="badge badge-info">${s[k][Object.keys(s[k])[0]].length}</span></h1>` 
  })
  document.getElementById('box-1').innerHTML = content
  console.log("FIRST SUBSCRIBE", s);
})



const secondUnsubscribe = store.subscribe(() => {
  const s = store.getState()
  let content = '';
  Object.keys(s).forEach(k => {
    content += `<h1><b>${k}:</b><span class="badge badge-secondary">${s[k][Object.keys(s[k])[0]].length}</span></h1>` 
  })
  document.getElementById('box-2').innerHTML = content
  console.log("SECOND SUBSCRIBE", s);
})

// firstUnsubscribe();
// secondUnsubscribe();

setTimeout(() => {
  store.dispatch({ type: 'CREATE_TODO', payload: { id: 1, todo: 'learn JS' } })
}, 1000);

setTimeout(() => {
  store.dispatch({ type: 'CREATE_EVENT', payload: { id: 1, todo: 'JS Conf' } })
}, 2000) 

setTimeout(() => {
  store.dispatch({ type: 'CREATE_TODO', payload: { id: 2, todo: 'learn React' } })
}, 4000);

setTimeout(() => {
  store.dispatch({ type: 'CREATE_EVENT', payload: { id: 2, todo: 'React Conf' } })
}, 5000)

setTimeout(() => {
  store.dispatch({ type: 'CREATE_TODO', payload: { id: 2, todo: 'Create Redux' } })
}, 6000)
