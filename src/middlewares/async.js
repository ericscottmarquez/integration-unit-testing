
//middleware boilerplate for multifunction syntax boilerplate::
export default ({ dispatch }) =>
  next =>
    action => {
      //check to see if the action has a promise on its payload property

      //if it does, wait for it to resolve 
      debugger;
      //if it doesnt, send the action on to the next middleware
      if (!action.payload || !action.payload.then) {
        return next(action);
      }

      //wait for promsise to resolve and get data, create new action
      //with that data and dispatch it
      action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });

    };




