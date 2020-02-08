class Product {
  id!: string;

  title!: string;
  titleEn!: string;

  description!: string;
  descriptionEn!: string;

  createdAt!: string;

  size!: number;
  weight!: number;
  priceShow!: number;

  visibility!: boolean;

  pic?: string[];
  titlePic?: string;

  extraInfo!: ProductExtraInfo;
}

class ProductExtraInfo {
  tag!: string[];
  material!: string[];
  color!: string[];
}

export { Product };
