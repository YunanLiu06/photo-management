export const ACTIONS = {
  UPDATE_END: 'UPDATE_END',
  UPDATE_START: 'UPDATE_START'
};

const initialState = { email: null, inprogress: false };

export const loginUser = (store = initialState, payload) => {
  switch (payload.type) {
    case ACTIONS.UPDATE_END:
      return {
        ...store,
        inprogress: false,
        email: payload.data.email
      }

    case ACTIONS.UPDATE_START:
      return {
        ...store,
        inprogress: true
      }

    default:
      return store;
  };
};