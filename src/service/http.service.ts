import { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import axios from 'axios';
// import appStorage from './localStorage';

const config = process.env;

class HttpService {
  private service: AxiosInstance;
  constructor() {
    this.service = axios.create({
      baseURL: config.REACT_APP_SERVER_URL,
    });
    this.interceptor();
  }
  // public registered(token: string) {
  //   this.service.defaults.headers.common['Authorization'] = `Brearer ${token}`;
  // }
  private interceptor() {
    this.service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service.interceptors.request.use(this.handleRequestSuccess, this.handleRequestError);
  }

  private handleRequestSuccess(config: AxiosRequestConfig) {
    config.headers = {
      // Authorization: `Bearer ${appStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    };
    return config;
  }
  private handleRequestError(error: AxiosError) {
    return Promise.reject(error);
  }
  private handleSuccess(response: AxiosResponse) {
    return response.data;
  }
  private handleError(error: AxiosError) {
    return Promise.reject(error);
  }
  get<T>(endpoint: string, queryParams: Object): Promise<T> {
    return this.service.get(endpoint, {
      params: queryParams,
    });
  }
  post<T>(endpoint: string, data: any): Promise<T> {
    return this.service.post(endpoint, data);
  }
}

const http = new HttpService();
export default http;
