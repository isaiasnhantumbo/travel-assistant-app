import { inject, injectable } from "tsyringe";

import { User } from "../../../domain/User";
import { AppError } from "../../../shared/errors/AppError";
import { ICreateUser, UserDto } from "../../dtos/UserDto";
import { mapper } from "../../helpers/mappings/mapper";
import { IGenericRepository } from "../../interfaces/IGenericRepository";

@injectable()
export class UpdateUser {
  constructor (
    @inject("UserRepository")
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle (id: string, data: ICreateUser): Promise<UserDto> {
    const { name } = data;
    const user = await this.usersRepository.findOneBy({
      where: {
        id
      }
    });
    if (user == null) {
      throw new AppError("User not Exist", 400);
    }
    user.name = name;
    await this.usersRepository.update(user);
    return mapper.map(user, User, UserDto);
  }
}
