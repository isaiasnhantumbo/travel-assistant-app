import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  InsertResult,
  QueryRunner,
  Repository,
  SelectQueryBuilder
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { UpsertOptions } from "typeorm/repository/UpsertOptions";

import { BaseEntity } from "./../../domain/BaseEntity";
import { IGenericRepository } from "../../app/interfaces/IGenericRepository";
import { AppDataSource } from "../../persistence/data-source";
import { AppError } from "../../shared/errors/AppError";

export abstract class BaseRepository<
  // Class representing TypeORM model
  Entity extends BaseEntity
> implements IGenericRepository<Entity> {
  constructor (private readonly classFn: new () => Entity) {}

  protected getRepository (): Repository<Entity> {
    return AppDataSource.getRepository<Entity>(this.classFn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  protected async execute<P>(fn: (repo: Repository<Entity>) => Promise<P>) {
    try {
      const repo = this.getRepository();
      return await fn(repo);
    } catch (err: any) {
      throw new AppError(err.message);
    }
  }

  async findOneBy (options: FindOneOptions<Entity>): Promise<Entity | null> {
    return await this.execute(async (repo) => await repo.findOne(options));
  }

  async findManyBy (
    options: FindManyOptions<Entity>
  ): Promise<Entity[] | undefined> {
    return await this.execute(async (repo) => await repo.find(options));
  }

  async findAll (options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return await this.execute(async (repo) => await repo.find(options));
  }

  async delete (options: FindOptionsWhere<Entity>): Promise<DeleteResult> {
    return await this.execute(async (repo) => await repo.delete(options));
  }

  async create (entity: Entity): Promise<Entity> {
    return await this.execute(
      async (repo) =>
        await repo.save({
          ...entity
        })
    );
  }

  async findAndCountBy (
    options: FindOptionsWhere<Entity>
  ): Promise<[Entity[], number]> {
    return await this.execute(
      async (repo) => await repo.findAndCountBy(options)
    );
  }

  async update (entity: Entity): Promise<Entity> {
    return await this.execute(
      async (repo) =>
        await repo.save({
          ...entity
        })
    );
  }

  async upsert (
    entityOrEntities:
    | QueryDeepPartialEntity<Entity>
    | Array<QueryDeepPartialEntity<Entity>>,
    conflictPathsOrOptions: string[] | UpsertOptions<Entity>
  ): Promise<InsertResult> {
    return await this.execute(
      async (repo) =>
        await repo.upsert(entityOrEntities, conflictPathsOrOptions)
    );
  }

  async createQuery (
    alias?: string,
    queryRunner?: QueryRunner
  ): Promise<SelectQueryBuilder<Entity>> {
    return await this.execute(async (repo) =>
      repo.createQueryBuilder(alias, queryRunner)
    );
  }
}
