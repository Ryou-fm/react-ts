import axios from '../axios/axios'
const baseUrl = 'http://47.101.145.49:82/api'
export function getMatterReviewPage() {
  return axios({
    url: `${baseUrl}/cbs/theme/getAllPostedScene`,
    method: "get"
  });
}