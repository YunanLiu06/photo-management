import axios from 'axios';

export const S3AccessTool = (payload, setRes) => {
  // payload = { operation: 'getAll', key: 'image name' }

  return axios.post('https://1tgiqegizf.execute-api.us-east-1.amazonaws.com/dev', payload)
    .then(response => {
      if (setRes) {
        setRes(response);
        return;
      }
      return response;
    }).catch(err => console.log(err));//TODO: error handling
};