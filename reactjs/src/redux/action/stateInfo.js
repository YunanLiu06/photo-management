import { ACTIONS } from "../reducer/stateInfo";

export const updateStateInfo = payload => {
  return {
    type: ACTIONS.UPDATE_STATUS,
    data: payload
  };
};

export const setUpdateStateInfo = (information) => {
  return (dispatch) => {dispatch(updateStateInfo(information));};
};