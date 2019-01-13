import {createStore, applyMiddleware} from 'redux';

const logger = store => next => action => {
  return  action.type?
    next(action)
  :
    store
  ;
}

const counter = (
  state = {
    repositories: false,
    user: false
  }, action
) => {
    switch (action.type) {
      case 'getRepos':
        return {
          ...state,
          repositories: {repositories: action.response, isLoading: action.isLoading},
        }
      case 'getRepos_failed':
      return {
        ...state,
        repositories: {...action.response, isLoading: action.isLoading},
      }
      case 'getUserData':
        return {
          ...state, 
          user: {...action.response, isLoading: action.isLoading}
        }
      case 'getUserData_failed':
        return {
          ...state, 
          user: {...action.response, isLoading: action.isLoading}
        }
      default:
        return state
    }
  }
  
  let store = createStore(counter, applyMiddleware(logger));

  store.subscribe(() => console.log("state has changed", store.getState()));

  export default store;