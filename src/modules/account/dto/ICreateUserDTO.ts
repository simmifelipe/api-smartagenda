interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  first_access: boolean;

  active?: boolean;
  photo?: string;
}

export { ICreateUserDTO };