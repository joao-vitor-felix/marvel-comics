export type Comic = {
  id: number;
  title: string;
  description: string | null;
  variantDescription?: string;
  format: string;
  pageCount: number;
  images: {
    path: string;
    extension: string;
  }[];
  creators: {
    items: {
      name: string;
      resourceURI: string;
      role: string;
    }[];
  };
  characters: {
    items: {
      name: string;
      resourceURI: string;
    }[];
  };
};
