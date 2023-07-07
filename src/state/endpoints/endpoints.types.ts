export interface PostDTO {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressType;
  phone: string;
  website: string;
  company: UserCompanyType;
}

export interface TransformUsers {
  value: string;
  label: string;
}

export interface CommentDTO {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UserAddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserCompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface PostsParams {
  userId?: number;
}
