/**/import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
const request = axios.create({
  timeout: 3600000
})
// @ts-ignore
request.interceptors.request.use((config : AxiosRequestConfig) => {
  // @ts-ignore/**/
  config.baseURL = (import.meta.env.VITE_APP_REQUEST_BASE || '')
  return config
})
request.interceptors.response.use((res : AxiosResponse) => {
  return res
}, (error: AxiosError) => {
  return error
})
export default request
