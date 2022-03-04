import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { useAppStore } from '../../state';

const processData = async (options: any = {}): Promise<any> => {
  let requestConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080',
    url: '',
    method: 'get',
    timeout: 10000,
    data: {},
    validateStatus: (status) => status >= 200 && status < 500,
  };

  // read token from local storage
  // let token = localStorage.getItem('token');

  // set the X-AUTH-TOKEN if it is not the Wordpress-API to geht the latest event
  // token must be exist in the localStorage!
  // if (options.url !== CTA_EVENT_URL) {
  //   if (token) {
  //     requestConfig.headers = { 'X-AUTH-TOKEN': token };
  //   }
  // }

  // mix default config with parameters
  requestConfig = {
    ...requestConfig,
    ...options,
  };

  let response: AxiosResponse;

  try {
    response = await axios(requestConfig);
  } catch {
    const payload = {
      error: true
    };
    useAppStore.setState({
      alert: {
        error: true, duration: 10000, severity: 'error', text: 'Bei der Kommunikation mit dem Backend-Server ist es zu einem schwerwiegenden Problem gekommen'
      }
    });

    return payload;
  }

  // const { status, statusText, data } = response;

  // // check error in data
  // if (!data.success) {
  //   const payload = {
  //     error: true
  //   };

  //   useAppStore.setState({
  //     alert: {
  //       error: true, severity: 'error', text: `${status} ${statusText}`
  //     }
  //   });

  //   return payload;
  // }
  return response;
};

export default processData;
