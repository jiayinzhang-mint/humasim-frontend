class News {
  id!: string;
  title!: string;
  createdAt!: string;
  visibility!: boolean;
  author!: string;
  content!: string;
  contentEn!: string;
  intro!: string;
  introEn!: string;
  pic?: string[];
  titlePic?: string;
}

export { News };
