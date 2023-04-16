export interface AnswerInfo {
  id: number;
  content: string;
  nickname: string;
  selected: boolean;
  userRole: string;
}

export interface Tag {
  id: number;
  tag: {
    id: number;
    tagName: string;
  };
}

export interface Pet {
  age: number;
  breed: string;
  gender: boolean;
  name: string;
  neutered: boolean;
  note: string;
  weight: number;
}

export interface ExpertInfo {
  careerList: string[];
  education: string;
  introduce: string;
  location: string;
  username: string;
}

export interface PostDataInfo {
  content: string;
  createdDate: string;
  nickname: string;
  postCategory: number;
  title: string;
  viewCount: number;
  images: string[];

  articleId?: number;
  likeCount?: number;
  tagList?: Tag[];
  imagePath?: string;

  category?: string;
  isSolved?: boolean;
  questionId?: number;

  pet?: Pet | null;
}
