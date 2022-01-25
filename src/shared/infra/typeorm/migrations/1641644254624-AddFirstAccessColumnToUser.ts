import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddFirstAccessColumnToUser1641644254624
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "first_access",
        type: "boolean",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "first_access");
  }
}
