import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { User } from "../../../domain/User";
import { BadRequestError } from "../../../shared/errors/AppError";
import { ILoginRequest, ILoginResponse, UserDto } from "../../dtos/UserDto";
import { mapper } from "../../helpers/mappings/mapper";
import { IGenericRepository } from "../../interfaces/IGenericRepository";

@injectable()
export class Login {
  constructor (
    @inject("UserRepository")
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle (data: ILoginRequest): Promise<ILoginResponse> {
    const { email, password } = data;
    const user = await this.usersRepository.findOneBy({
      where: {
        email
      }
    });

    if (user === null) {
      throw new BadRequestError("Email or password incorret!");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestError("Email or password incorret!");
    }
    const token = sign({}, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "1d"
    });

    const userDto = mapper.map(user, User, UserDto);
    return {
      user: userDto,
      token
    };
  }
}
