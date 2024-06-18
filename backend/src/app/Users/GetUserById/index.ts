import { inject, injectable } from "tsyringe";

import { User } from "../../../domain/User";
import { NotFoundError } from "../../../shared/errors/AppError";
import { UserDto } from "../../dtos/UserDto";
import { mapper } from "../../helpers/mappings/mapper";
import { IGenericRepository } from "../../interfaces/IGenericRepository";

@injectable()
export class GetUserById {
  constructor (
    @inject("UserRepository")
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle (id: string): Promise<UserDto> {
    const user = await this.usersRepository.findOneBy({
      where: {
        id
      }
    });

    if (user === null) {
      throw new NotFoundError("User not Found");
    }
    return mapper.map(user, User, UserDto);
  }
}
