import { MigrationInterface, QueryRunner } from "typeorm";

export class default1718706019485 implements MigrationInterface {
  name = "default1718706019485"

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE \"users\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"name\" text NOT NULL, \"email\" text NOT NULL, \"password\" character varying NOT NULL, CONSTRAINT \"PK_a3ffb1c0c8416b9fc6f907b7433\" PRIMARY KEY (\"id\"))");
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE \"users\"");
  }
}
