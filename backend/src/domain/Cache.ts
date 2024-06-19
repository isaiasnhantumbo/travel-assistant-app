import { AutoMap } from "@automapper/classes";
import { Column, Entity } from "typeorm";

import { ICreateCache } from "./../app/dtos/CacheDto";
import { BaseEntity } from "./BaseEntity";

@Entity("cache")
export class Cache extends BaseEntity implements ICreateCache {
  @Column({ type: "text" })
  @AutoMap()
    data: string;

  @Column({ type: "jsonb" })
  @AutoMap()
    key: string;
}
