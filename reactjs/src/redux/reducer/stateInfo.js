export const ACTIONS = {
  UPDATE_STATUS: 'UPDATE_STATUS',
  UPDATE_START: 'UPDATE_START'
};

const initialState = {inprogress: false};

export const stateInfo = (store = initialState, payload) => {
  switch (payload.type) {
    case ACTIONS.UPDATE_STATUS:
      return {
        ...store,
        inprogress:false,
        ...payload.data
      }
    
    case ACTIONS.UPDATE_START:
      return {
        ...store,
        inprogress:true
      }

    default:
      return store;
  };
};