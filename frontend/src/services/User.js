import api from '../config/Api'

const baseEndpoint = '/users/me'

export default {
  getUsers (params) {
    return api.get(baseEndpoint, params)
  },

  getUser (id) {
    return api.get(`${baseEndpoint}/${id}`)
  },

  saveUser (data) {
    return api.post(baseEndpoint, data)
  },

  updateUser (id, data) {
    return api.put(`${baseEndpoint}/${id}`, data)
  },

  updateProfile (data) {
    return api.put(`${baseEndpoint}/update/me`, data)
  },

  changePassword (data) {
    return api.put(`${baseEndpoint}/change/password`, data)
  },

  recoverPassword (data, token) {
    return api.post(`/oauth/recover-password/${token}`, data)
  },

  isValidToken (token) {
    return api.get(`/oauth/recover-password/is-validate/${token}`)
  },

  deleteUser (id) {
    return api.delete(`${baseEndpoint}/${id}`)
  }
}
