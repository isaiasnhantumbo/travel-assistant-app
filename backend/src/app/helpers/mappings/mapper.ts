import { classes } from "@automapper/classes";
import { createMap, createMapper } from "@automapper/core";

import { User } from "../../../domain/User";
import { UserDto } from "../../dtos/UserDto";

export const mapper = createMapper({
  strategyInitializer: classes()
});
export class MappingProfiles {
  public MappingProfiles () {
    createMap(mapper, User, UserDto);
  }
}
