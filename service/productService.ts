import BasicService from './basicService';
import { Product } from '@/types/product';

class ProductService {
  static async getProductList(
    p: Product,
    page: number,
    size: number,
    keyword: string,
    tag: string
  ) {
    const rsp = await BasicService.getRequest('/api/humasim/product/list', {
      p,
      page,
      size,
      keyword,
      tag
    });
    if (rsp.msg === 'success') {
      return Promise.resolve({
        count: rsp.count as number,
        maxPage: rsp.maxPage as number,
        product: rsp.product as Product[]
      });
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }

  static async getOneProduct(id: string) {
    const rsp = await BasicService.getRequest('/api/humasim/product', { id });
    if (rsp.msg === 'success' && rsp.product) {
      return Promise.resolve(rsp.product as Product);
    } else {
      return Promise.reject(new Error(rsp.msg));
    }
  }
}

export default ProductService;
