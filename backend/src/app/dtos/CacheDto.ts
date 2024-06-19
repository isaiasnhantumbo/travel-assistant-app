import { AutoMap } from "@automapper/classes";

import { BaseDto } from "./BaseDto";

export class CacheDto extends BaseDto {
  @AutoMap()
    data: string;

  @AutoMap()
    key: string;
}
export interface ICreateCache {
  data: string
  key: string
}
