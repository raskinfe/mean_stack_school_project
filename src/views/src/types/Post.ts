export interface Post {
  title: string;
  category: string;
  description: Text;
  price?: string;
  date: Date;
  status: number;
  image?: string[];
  user_id: string;
  user_name: string;
}
