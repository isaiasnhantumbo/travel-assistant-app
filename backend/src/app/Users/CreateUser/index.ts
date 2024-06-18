import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { User } from '../../../domain/User';
import { AppError, BadRequestError } from '../../../shared/errors/AppError';
import { ICreateUser, UserDto } from '../../dtos/UserDto';
import { mapper } from '../../helpers/mappings/mapper';
import { IGenericRepository } from '../../interfaces/IGenericRepository';
@injectable()
export class CreateUser {
  constructor(
    @inject('UserRepository')
    private readonly usersRepository: IGenericRepository<User>
  ) {}

  async handle(data: ICreateUser): Promise<UserDto> {
    const { name, email, password } = data;
    if (name.length === 0) {
      throw new BadRequestError('The field name is required');
    }
    if (email.length === 0) {
      throw new BadRequestError('The field email is required');
    }
    const userAlreadyExist = await this.usersRepository.findOneBy({
      where: {
        email,
      },
    });
    if (userAlreadyExist != null) {
      throw new AppError('User Exist', 409);
    }

    const passwordHash = await bcrypt.hash(password, 8);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = passwordHash;
    await this.usersRepository.create(user);
    return mapper.map(user, User, UserDto);
  }
}
