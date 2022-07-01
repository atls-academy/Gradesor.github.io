export enum ELoginPasswordFields {
  login = "LoginPassword_login",
  pass = "LoginPassword_pass",
}

export type TLoginPasswordFieldsErrors = {
  [index in ELoginPasswordFields]?: {
    message: string;
  };
};
