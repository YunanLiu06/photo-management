import { ACTIONS } from "../reducer/stateInfo";
import { S3AccessTool } from "../../tools/s3AccessTool";

export const updateStateInfo = payload => {
  return {
    type: ACTIONS.UPDATE_STATUS,
    data: payload
  };
};

export const setUpdateStateInfo = (information) => {
  return (dispatch) => {
    dispatch({type: ACTIONS.UPDATE_START});
    return S3AccessTool({ operation: 'getAll' })
      .then(response => {
        const statesInfo = new Map();
        response?.data?.body.forEach(value => {
          const currKey = value?.Key;
          const subKey = currKey.substring(0,2);
          if(!statesInfo.has(subKey)) {
            statesInfo.set(subKey, []);
          }
          statesInfo.get(subKey).push(currKey);
        })

        dispatch({
          type: ACTIONS.UPDATE_STATUS,
          data: Object.fromEntries(statesInfo)
        })
      });
  };
};