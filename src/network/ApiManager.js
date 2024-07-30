import axios from 'axios';
import GlobalUrl from './GlobalUrl';
import api from './apiService';

export const BASE_URL = GlobalUrl.getInstance().getUrl();

class ApiManager {
  static endPoints = {
    SIGNUP: 'user-registration/',
    SIGNIN: 'user-login/',
    LOGOUT: 'user-logout/',
    PROFILE: 'profile/',
    LOGOUT: 'user-logout/',
    CHANGEPASS: 'changepassword/',
    GETCATEGORY: 'categories/',
    GETCATEGORYEVENT: 'get-cover-image-for-category/',
    APPCONFIG: 'app_config/',
    EVENT: 'events/',
  };

  async userRegister(data) {
    const url = BASE_URL + ApiManager.endPoints.SIGNUP;
    return axios.post(url, data);
  }
  async userLogin(data) {
    const url = BASE_URL + ApiManager.endPoints.SIGNIN;
    return axios.post(url, data);
  }
  async logout() {
    return api({
      url: BASE_URL + ApiManager.endPoints.LOGOUT,
      method: 'get',
    });
  }
  async getConfigData() {
    return api({
      url: BASE_URL + ApiManager.endPoints.APPCONFIG,
      method: 'get',
    });
  }
  async deleteAccount() {
    return api({
      url: BASE_URL + ApiManager.endPoints.PROFILE,
      method: 'delete',
    });
  }
  async userDetail() {
    return api({
      url: BASE_URL + ApiManager.endPoints.PROFILE,
      method: 'get',
    });
  }
  async getCategory() {
    return api({
      url: BASE_URL + ApiManager.endPoints.GETCATEGORY,
      method: 'get',
    });
  }
  async getCategoryEvents(id) {
    return api({
      url: BASE_URL + ApiManager.endPoints.GETCATEGORYEVENT + id + '/',
      method: 'get',
    });
  }
  async getCategoryDetail(id) {
    return api({
      url: BASE_URL + ApiManager.endPoints.GETCATEGORY + id + '/',
      method: 'get',
    });
  }
  async changePassword(data) {
    return await api({
      url: BASE_URL + ApiManager.endPoints.CHANGEPASS,
      method: 'post',
      data: { ...data },
    });
  }
  async createEvent(data) {
    return await api({
      url: BASE_URL + ApiManager.endPoints.EVENT,
      method: 'post',
      data: { ...data },
    });
  }
  async getEventDetail(id) {
    return await api({
      url: BASE_URL + ApiManager.endPoints.EVENT + id + '/',
      method: 'get',
    });
  }
  async getEventsList() {
    return await api({
      url: BASE_URL + ApiManager.endPoints.EVENT,
      method: 'get',
    });
  }
  async updateEvent(id, data) {
    return await api({
      url: BASE_URL + ApiManager.endPoints.EVENT + id + '/',
      method: 'patch',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

const ApiClient = new ApiManager();
export default ApiClient;
