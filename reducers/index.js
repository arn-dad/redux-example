export function eventsReducer(state = { events: []}, action){
  switch (action.type) {  
    case 'CREATE_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload ]
      }
    default:
      return state
  }
}

export function todosReducer(state = { todos: []}, action){
  switch (action.type) {  
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload ]
      }
    default:
      return state
  }
}