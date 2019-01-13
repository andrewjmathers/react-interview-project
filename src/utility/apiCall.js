import store from '../state/stateManager';

const apiCall = async(api, username) => {
    let actionName = api.name.toString();
  try{
    store.dispatch({type: actionName, isLoading: true});
    let response = await api(username);
    store.dispatch({type: actionName, isLoading: false, response: response});
  }catch(err){
    store.dispatch({type: actionName+"_failed", isLoading: false, response: {
      failed: true,
      err: err.response && err.response.data.message
    }});
  }
};

export default apiCall;