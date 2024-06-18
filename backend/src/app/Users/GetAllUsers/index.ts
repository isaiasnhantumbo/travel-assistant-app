import { inject, injectable } from "tsyringe";

import { User } from "../../../domain/User";
import { UserDto } from "../../dtos/UserDto";
import { mapper } from "../../helpers/mappings/mapper";
import { IGenericRepository } from "../../interfaces/IGenericRepository";

@injectable()
export class GetAllUsers {
  constructor (
    @inject("UserRepository")
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle (): Promise<UserDto[]> {
    const users = await this.usersRepository.findAll();
    return mapper.mapArray(users, User, UserDto);
  }
}
