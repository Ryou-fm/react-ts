import axios from '../axios/index'
// 获取第一步父判断
export function getSubject (id) {
  return axios({
    url: `/cbs/matJudge/getParentJudgeByThemeId?themeId=${id}`,
    method: 'get',
  })
}