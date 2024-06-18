import { AutoMap } from "@automapper/classes";

import { BaseDto } from "./BaseDto";

export class UserDto extends BaseDto {
  @AutoMap()
    name: string;

  @AutoMap()
    email: string;
}
export interface ICreateUser {
  name: string
  email: string
  password: string
}

export interface ILoginRequest {
  email: string
  password: string
}
export interface ILoginResponse {
  user: UserDto
  token: string
}
