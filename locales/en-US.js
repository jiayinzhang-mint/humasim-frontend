export default (context) => {
  return new Promise((resolve) => {
    resolve({
      links: {
        news: 'news',
        collection: 'collection',
        about: 'about',
        contact: 'contact',
        address: 'address',
        timeline: 'timeline',
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
