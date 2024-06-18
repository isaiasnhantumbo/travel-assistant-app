import { AutoMap } from "@automapper/classes";

export class BaseDto {
  /**
   * Unique Identifier
   */

  @AutoMap()
  public id: string;
}
