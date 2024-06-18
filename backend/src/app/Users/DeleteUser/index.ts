import { inject, injectable } from "tsyringe";

import { User } from "../../../domain/User";
import { BadRequestError } from "../../../shared/errors/AppError";
import { mapper } from "../../helpers/mappings/mapper";
import { IGenericRepository } from "../../interfaces/IGenericRepository";
import { UserDto } from "./../../dtos/UserDto";
@injectable()
export class DeleteUser {
  constructor (
    @inject("UserRepository")
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle (id: string): Promise<UserDto> {
    const user = await this.usersRepository.findOneBy({
      where: { id }
    });
    if (user === null) {
      throw new BadRequestError("User not exist");
    }
    await this.usersRepository.delete({ id });
    return mapper.map(user, User, UserDto);
  }
}
