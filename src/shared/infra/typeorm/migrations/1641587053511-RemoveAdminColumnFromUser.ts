import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveAdminColumnFromUser1641587053511 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "admin");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("user", new TableColumn({ name: "admin", type: "boolean" }))
  }

}
