class News {
  _id!: string;
  title!: string;
  createTime!: string;
  visibility!: boolean;
  author!: string;
  content!: string;
  contentEn!: string;
  intro!: string;
  introEn!: string;
  pic?: Picture[];
  titlePic?: Picture;
}

class Picture {
  title!: string;
  url!: string;
  name!: string;
  createTime!: string;
}

export { News, Picture };
