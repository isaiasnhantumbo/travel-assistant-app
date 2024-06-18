import { container } from "tsyringe";

import { IGenericRepository } from "../../app/interfaces/IGenericRepository";
import { User } from "../../domain/User";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";

container.register<IGenericRepository<User>>("UserRepository", UserRepository);
