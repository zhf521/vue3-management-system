import axios from 'axios'
import type {AxiosInstance,AxiosError,AxiosResponse,InternalAxiosRequestConfig,
} from 'axios'

// 定义请求相应参数，不含data

interface Result{
  code: number
  msg:string
}

// 请求相应参数，包含data
interface ResultData<T = any> extends Result{
  data?:T
}
const mockURL: string = 'https://mock.apifox.cn/m1/2328533-0-default'

const service: AxiosInstance = axios.create({
  baseURL: mockURL,
  headers:{ apifoxToken: sessionStorage.getItem('token') }
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject()
  }
)
// 响应拦截器
axios.interceptors.response.use( (response:AxiosResponse|any)=> {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
  response
  if (response.status === 200) {
    return response
  } else {
    Promise.reject()
  }
  },  (error:AxiosError) =>{
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject()
})

// 常用方法封装
export function get<T>(url: string, params?: object): Promise<ResultData<T>> {
  return service.get(url, { params })
}
export function post<T>(url: string, params?: object): Promise<ResultData<T>> {
  return service.post(url, params)
}
export function put<T>(url: string, params?: object): Promise<ResultData<T>> {
  return service.put(url, params)
}
export function del<T>(url: string, params?: object): Promise<ResultData<T>> {
  return service.delete(url, { params })
}