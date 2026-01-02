export type Service = {
  title: string;
  description: string;
  longDescription?: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type Author = {
  name: string;
  avatar: string;
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  date: string;
  image: string;
  author: Author;
};

export type Lead = {
    name: string;
    email: string;
    company?: string;
    message: string;
}
