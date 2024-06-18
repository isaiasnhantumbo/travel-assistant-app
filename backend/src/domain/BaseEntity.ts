import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IBaseEntity } from './../app/interfaces/IBaseEntity';

export class BaseEntity implements IBaseEntity {
  /**
   * Unique Identifier
   */
  @PrimaryGeneratedColumn('uuid')
  @AutoMap()
  public id!: string;

  /**
   * Date of creation
   */
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  public readonly createdAt: Date;

  /**
   * Date of update
   */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  public readonly updatedAt: Date;
}
