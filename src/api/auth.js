import api from './main'

export const loginRequest = user => api.post('/users/login', user)

export const registerRequest = user => api.post('/users/register', user)