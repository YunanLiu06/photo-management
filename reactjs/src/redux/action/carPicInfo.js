import { ACTIONS } from "../reducer/stateInfo";
import { S3AccessTool } from "../../tools/s3AccessTool";

export const updateCarPic = payload => {
  return {
    type: ACTIONS.UPDATE_STATUS,
    data: payload
  };
};

export const setUpdateCarPic = (information) => {
  return (dispatch) => {
    dispatch({type: ACTIONS.UPDATE_START});
    return S3AccessTool({ operation: 'getAll' })
      .then(response => {
        const carPics = [];
        response?.data?.body.forEach(value => {
          const currKey = value?.Key;
          currKey.substring(0,3) === 'CAR' && carPics.push(currKey);
        })

        console.log(carPics);

        dispatch({
          type: ACTIONS.UPDATE_STATUS,
          data: Object.fromEntries(carPics)
        })
      });
  };
};