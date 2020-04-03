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
        cn: 'cn',
      },
      news: {
        learnMore: 'learn more',
        backHome: 'back home',
      },
      collection: {
        older: 'older',
        backHome: 'back home',
        collaborator: 'collaborator',
        client: 'client',
      },
      about: {
        ourDimension: 'our dimension',
        serviceContent: 'spatial // product // graphic // development',
        subsidiaries: 'subsidiaries',
        partners: 'partners',
      },
      contact: {
        address: 'address',
        addressDetail:
          'ROOM 2A, NO. 18, 1895 LANE, HUTAIZHI ROAD, JING`AN DISTRICT, SHANGHAI, CHINA',
        service: 'service',
        joinUs: 'join us ',
        contactUs: 'connect',

        architect: 'architect',
        interiorDesigner: 'interior designer',
        productDesigner: 'product designer',
        developer: 'developer',
        graphicDesigner: 'graphic designer',
        internship: 'internship',
        skills: 'skills',

        application: 'application',
        cv: 'c.v.',
        portfolio: 'portfolio',
      },
      timeline: {
        chiefDesigner: 'chief designer - LIN',
        awards: 'awards',
        exhibition: 'exhibition',
      },
    });
  });
};
