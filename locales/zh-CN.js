export default (context) => {
  return new Promise((resolve) => {
    resolve({
      links: {
        news: '新闻',
        collection: '陈列',
        about: '关于',
        contact: '联系',
        address: '地址',
        timeline: '年表',
        en: 'en',
        cn: 'cn'
      },
      news: {
        learnMore: '了解更多',
        backHome: '回到首页'
      },
      about: {
        ourDimension: '我们的“维度”',
        serviceContent: '空间 // 产品 // 平面 // 开发',
        subsidiaries: '旗下品牌',
        partners: '合作伙伴'
      },
      contact: {
        address: '地址',
        addressDetail: '中国上海市 静安区 沪太支路1895弄 12号 201室',
        service: '客户服务',
        joinUs: '加入我们',
        contactUs: '通讯方式',

        architect: '建筑设计师',
        interiorDesigner: '室内设计师',
        productDesigner: '产品设计师',
        developer: '开发者',
        graphicDesigner: '平面设计师',
        internship: '实习生',
        skills: '技能',

        application: '申请职位',
        cv: '个人简历',
        portfolio: '作品集'
      }
    });
  });
};
