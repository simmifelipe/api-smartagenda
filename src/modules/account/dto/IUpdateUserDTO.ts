
interface IUpdateUserDTO {
  id: string;
  name: string;
  email: string;
  first_access: boolean;

  photo?: string;
  active?: boolean;
  updated_at?: Date;
}

export { IUpdateUserDTO };