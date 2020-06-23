import axios from '../axios/index'

export function getMatterReviewPage(){
  return axios({
    url: `/cbs/theme/getAllPostedScene`,
    method: "get"
  });
}