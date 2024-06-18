import {
  Body,
  Controller,
  Delete,
  Example,
  Get,
  Patch,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags
} from "tsoa";
import { container } from "tsyringe";

import { Login } from "./../../app/Authentication/Login/";
import { ILoginRequest, ILoginResponse } from "./../../app/dtos/UserDto";

@Route("auth")
@Tags("Authentication and Authorization Routes")
export class AuthenticationController extends Controller {
  /**
   * Authentication Users Routes
   */
  @Example<ILoginRequest>({
    email: "johndoe@example.com",
    password: "topsecret23"
  })
  @Post("login")
  public async login (@Body() requestBody: ILoginRequest): Promise<ILoginResponse> {
    const login = container.resolve(Login);
    const user = await login.handle(requestBody);
    this.setStatus(200);
    return user;
  }
}
