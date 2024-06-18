/* eslint-disable n/no-path-concat */
import "dotenv/config";
import "reflect-metadata";

import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

import { MainSeeder } from "./seeds/MainSeeder";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number | undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/domain/*.{ts,js}"
      : "src/**/domain/*.{ts,js}"
  ],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  logging: true,
  seeds: [MainSeeder]
  // ssl: {
  //   rejectUnauthorized:
  //     process.env.NODE_ENV !== "production"
  // }
};

export const AppDataSource = new DataSource(options);
