const baseUrl = 'http://localhost:8088/api/mission'

export default {
  // 登录验证
  getMissionInfo: baseUrl + '/getMissionInfo',
  checkAnswer: baseUrl + '/checkAnswer'
}
