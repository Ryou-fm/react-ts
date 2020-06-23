
import axios from 'axios'
import { message } from 'antd'
// 默认配置一个api代理转发
axios.defaults.baseURL = '/api';

// 配置接口返回code不为0时 弹出错误配置信息
axios.interceptors.response.use(function (response) {
    if (response.data.code === 1){
      message.warning(response.data.msg);
    }
    return response;
  }, function (error) {
    if (error.response) {
        if(error.response.status === 500){
          message.warning('请联系服务器管理员！');
        }
      }
      return Promise.reject(error.response.data) 
  })
  export default axios
