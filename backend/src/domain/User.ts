import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';

import { ICreateUser } from '../app/dtos/UserDto';
import { BaseEntity } from './BaseEntity';

@Entity('users')
export class User extends BaseEntity implements ICreateUser {
  @Column({ type: 'text' })
  @AutoMap()
  name: string;

  @Column({ type: 'text' })
  @AutoMap()
  email: string;

  @Column()
  password: string;
}
