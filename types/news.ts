class News {
  id!: string;
  title!: string;
  titleEn!: string;
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
