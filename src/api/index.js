import axios from 'axios';
import Alert from '../kits/common'
import { Toast } from "mint-ui";

let http = axios.create({
  baseURL: 'http://192.168.1.205:81',
  // baseURL: 'http://192.168.1.161:7825',
  // baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // application/x-www-form-urlencoded;
    // application/json;
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      "Authorization": window.loginToken
    }
  }).then(function (res) {
    response(res);
    //Toast(err);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}