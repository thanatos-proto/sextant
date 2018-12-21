import api from '../index'
import urls from './urls'

export default {
  getMissionInfo (params) {
    return api.get(urls.getMissionInfo, params)
  },
  checkAnswer (params) {
    return api.get(urls.checkAnswer, params)
  }
}
