import http from '@/config/httpConfig'
import $http from '@/config/uploadConfig';

/**登录 */
export const loginApi = (_json) => { return http.post('/login', _json) }
/**获取用户信息 */
export const loginSuccessApi = (_json) => { return http.post('/loginSuccess', _json) }

/**启动流程 */
export const addCableProcessApi = (data, formData) => {
  let url = "";
  for (let key in data) {
    url += key + "=" + data[key] + "&"
  }
  url = url.substr(0, url.length - 1);
  return $http.post(cableMoudle + '/addCableProcess?' + url,
    formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  );
}
