import {LOGIN_API} from '../constants/API';
import axios from 'axios';

export function loginAPI(data) {
    console.log('data',data);
    return axios.post(LOGIN_API, { username:data.username,password:data.password })
      .then(res => {
        console.log('res',res);
        console.log('resdata',res.data);
        return res;
      })
    
}