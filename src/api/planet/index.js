import api from '../index'
import urls from './urls'

export default {
  getUserPlanetList (params) {
    return api.get(urls.getUserPlanetList, params)
  },
  getPlanetInfo (params) {
    return api.get(urls.getPlanetInfo, params)
  }
}
