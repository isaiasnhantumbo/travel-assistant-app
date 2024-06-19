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
  Security,
  SuccessResponse,
  Tags
} from "tsoa";
import { container } from "tsyringe";

import { ICreateUser, UserDto } from "../../app/dtos/UserDto";
import { CreateUser } from "../../app/Users/CreateUser";
import { DeleteUser } from "../../app/Users/DeleteUser";
import { GetAllUsers } from "../../app/Users/GetAllUsers";
import { GetUserById } from "../../app/Users/GetUserById";
import { UpdateUser } from "../../app/Users/UpdateUser";

@Route("users")
@Tags("Users Routes")
export class UsersController extends Controller {
  /**
   * CRUD Users Routes
   */
  @Example<ICreateUser>({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "dfasfds"
  })
  @SuccessResponse("201", "Created")
  @Post()
  public async createUser (@Body() requestBody: ICreateUser): Promise<UserDto> {
    const createUser = container.resolve(CreateUser);
    const user = await createUser.handle(requestBody);
    this.setStatus(201);
    return user;
  }

  @Security("jwt")
  @Get()
  public async getUsers (): Promise<UserDto[]> {
    const getAllUsers = container.resolve(GetAllUsers);
    const users = await getAllUsers.handle();
    return users;
  }

  @Security("jwt")
  @Get("{userId}")
  public async getUserById (@Path() userId: string): Promise<UserDto> {
    const getUserById = container.resolve(GetUserById);
    const user = await getUserById.handle(userId);
    return user;
  }

  @Security("jwt")
  @Patch("{userId}")
  public async updateUser (
    @Path() userId: string,
      @Body() requestBody: ICreateUser
  ): Promise<UserDto> {
    const updateUser = container.resolve(UpdateUser);
    const user = await updateUser.handle(userId, requestBody);
    return user;
  }

  @Security("jwt")
  @Delete("{userId}")
  public async deleteUser (@Path() userId: string): Promise<UserDto> {
    const deleteUser = container.resolve(DeleteUser);
    const user = await deleteUser.handle(userId);
    return user;
  }
}
