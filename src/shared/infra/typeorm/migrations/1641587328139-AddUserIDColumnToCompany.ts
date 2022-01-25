import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserIDColumnToCompany1641587328139 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("company", new TableColumn({ name: "user_id", type: "uuid" }));

    await queryRunner.createForeignKey("company", new TableForeignKey({
      name: 'fk_company_user',
      columnNames: ["user_id"],
      referencedTableName: "user",
      referencedColumnNames: ["id"]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("company", "fk_company_user");

    await queryRunner.dropColumn("company", "user_id");
  }

}
