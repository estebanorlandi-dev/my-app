export interface UserModel {
  $id: string;
  $created_at: number;
  username: string;
  avatar: string;
  bio: string;
}

export interface ShortcutModel {
  $id: string;
  name: string;
  link: string;
  img: string;
}
