import axios from 'axios';

class BasicService {
  public static getData(rsp: any) {
    let rspData = rsp;
    if (rsp.data) {
      rspData = rsp.data;
    }
    // err => no data
    return rspData;
  }

  public static async getRequest(url: string, params: any) {
    try {
      const rsp = await axios.get(`${url}`, {
        params
      });
      const json = rsp.data;
      const msg = { url, params, rsp: json };
      console.log(msg);

      return this.getData(rsp);
    } catch (err) {
      return this.getData(err);
    }
  }

  public static async postRequest(url: string, params: any) {
    try {
      const rsp = await axios.post(`${url}`, params);
      const json = rsp.data;
      const msg = { url, params, rsp: json };
      console.log(msg);

      return this.getData(rsp);
    } catch (err) {
      return this.getData(err);
    }
  }

  public static async putRequest(url: string, params: any) {
    try {
      const rsp = await axios.put(`${url}`, params);
      const json = rsp.data;
      const msg = { url, params, rsp: json };
      console.log(msg);

      return this.getData(rsp);
    } catch (err) {
      return this.getData(err);
    }
  }

  public static async deleteRequest(url: string, params: any) {
    try {
      const rsp = await axios.delete(`${url}`, {
        params
      });
      const json = rsp.data;
      const msg = { url, params, rsp: json };

      console.log(msg);

      return this.getData(rsp);
    } catch (err) {
      return this.getData(err);
    }
  }
}

export default BasicService;
