import { ACTIONS } from "../reducer/loginUser";

export const updateUserLogin = (decodedInfo) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.UPDATE_START });
    return dispatch({
      type: ACTIONS.UPDATE_END,
      data: decodedInfo
    })
  };
}