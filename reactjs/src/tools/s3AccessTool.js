import axios from 'axios';

export const S3AccessTool = (payload, setRes) => {
  // payload = { operation: 'getAll', key: 'image name' }

  axios.post('https://1tgiqegizf.execute-api.us-east-1.amazonaws.com/dev', payload)
    .then(response => {
      if (setRes) {
        setRes(response);
        return;
      }
      return response?.data?.body;
    }).catch(err => console.log(err));
};