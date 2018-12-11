// 职责：负责管理当前系统中的所有post请求
import axios from 'axios';
import { Toast } from 'mint-ui'

let http = axios.create({
  baseURL: 'http://192.168.1.205:81',
  // baseURL: 'http://192.168.1.161:7825',
  // baseURL: '/',
  withCredentials: true

});
function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      "Authorization": window.loginToken
    }
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  }
}


