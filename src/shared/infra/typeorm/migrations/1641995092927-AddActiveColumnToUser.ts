import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddActiveColumnToUser1641995092927 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("user", new TableColumn({
      name: "active",
      type: "boolean",
      default: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "active");
  }

}
