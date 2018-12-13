import api from '../index'
import urls from './urls'

export default {
  auth (params) {
    return api.post(urls.auth, params)
  },
  register (params) {
    return api.post(urls.register, params)
  }
}
