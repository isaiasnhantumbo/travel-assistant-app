import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  InsertResult,
  ObjectLiteral,
  QueryRunner,
  SelectQueryBuilder
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { UpsertOptions } from "typeorm/repository/UpsertOptions";

export interface IGenericRepository<T extends ObjectLiteral> {
  create: (entity: T) => Promise<T>
  findOneBy: (options: FindOneOptions<T>) => Promise<T | null>
  findManyBy: (options: FindManyOptions<T>) => Promise<T[] | undefined>
  findAll: (options?: FindManyOptions<T>) => Promise<T[]>
  findAndCountBy: (options: FindOptionsWhere<T>) => Promise<[T[], number]>
  update: (entity: T) => Promise<T>
  delete: (options: FindOptionsWhere<T>) => Promise<DeleteResult>
  upsert: (
    entityOrEntities:
    | QueryDeepPartialEntity<T>
    | Array<QueryDeepPartialEntity<T>>,
    conflictPathsOrOptions: string[] | UpsertOptions<T>
  ) => Promise<InsertResult>
  createQuery: (
    alias?: string,
    queryRunner?: QueryRunner
  ) => Promise<SelectQueryBuilder<T>>
}
