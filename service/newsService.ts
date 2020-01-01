import { News } from '../types/news';
import BasicService from './basicService';

class NewsService {
  static async getNewsList() {
    const rsp = await BasicService.getRequest('/public/news/list', {});
    if (rsp.code === 200) {
      return Promise.resolve(rsp.data.news as News[]);
    } else {
      return Promise.reject(new Error(rsp.data));
    }
  }
}

export default NewsService;
