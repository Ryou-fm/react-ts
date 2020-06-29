import axios from '../axios/index'

export function getdescirpt (id) {
  return axios({
    url: `/cbs/theme/getAttentionById/${ id }`,
    method: 'get'
  })
}