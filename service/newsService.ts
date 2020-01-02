import BasicService from './basicService';
import { News } from '@/types/news';

class NewsService {
  static async getNewsList() {
    const rsp = await BasicService.getRequest('/api/news/list', {});
    if (rsp.msg === 'success') {
      return Promise.resolve(rsp.news as News[]);
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }

  static async getOneNews(id: string) {
    const rsp = await BasicService.getRequest('/api/news', { id });
    if (rsp.msg === 'success' && rsp.news) {
      return Promise.resolve(rsp.news as News);
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }
}

export default NewsService;
