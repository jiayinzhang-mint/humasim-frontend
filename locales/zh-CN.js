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
      home: {
        title: 'Welcome',
        introduction: 'This is an introduction in English.'
      },
      about: {
        title: 'About',
        introduction: 'This page is made to give you more informations.'
      }
    });
  });
};
