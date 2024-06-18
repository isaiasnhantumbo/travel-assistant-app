import bcrypt from "bcrypt";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { User } from "../../domain/User";

export class UserSeeder implements Seeder {
  async run (
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const passwordHash = await bcrypt.hash("admin", 8);
    const defaultUser = new User();
    defaultUser.email = "majorker548@gmail.com";
    defaultUser.name = "Major Key";
    defaultUser.password = passwordHash;

    const userExists = await userRepository.findOneBy({
      email: defaultUser.email
    });

    if (userExists == null) {
      const newUser = userRepository.create(defaultUser);
      await userRepository.save(newUser);
    }
  }
}
