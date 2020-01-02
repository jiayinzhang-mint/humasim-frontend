class Work {
  id!: string;
  title!: string;
  createdAt!: string;
  visibility!: boolean;
  client!: string;
  collaborator!: string;
  description!: string;
  descriptionEn!: string;
  videoLink!: string;
  pic?: string[];
  titlePic?: string;
}

export { Work };
