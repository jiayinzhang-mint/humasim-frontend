import BasicService from './basicService';
import { Work } from '@/types/work';

class WorkService {
  static async getWorkList(year: string) {
    const rsp = await BasicService.getRequest('/api/work/list', { year });
    if (rsp.msg === 'success') {
      return Promise.resolve(rsp.work as Work[]);
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }

  static async getOneWork(id: string) {
    const rsp = await BasicService.getRequest('/api/work', { id });
    if (rsp.msg === 'success' && rsp.work) {
      return Promise.resolve(rsp.work as Work);
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }
}

export default WorkService;
