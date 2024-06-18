import { User } from "../../domain/User";
import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository<User> {
  constructor () {
    super(User);
  }
}
