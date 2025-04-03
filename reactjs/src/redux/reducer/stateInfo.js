export const ACTIONS = {
  UPDATE_STATUS: 'UPDATE_STATUS',
};

const initialState = {};

export const stateInfo = (store = initialState, payload) => {
  switch (payload.type) {
    case ACTIONS.UPDATE_STATUS:
      return {
        ...store,
        ...payload.data
      }

    default:
      return store;
  };
};