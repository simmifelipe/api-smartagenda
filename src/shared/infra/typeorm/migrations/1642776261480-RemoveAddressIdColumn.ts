import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class RemoveAddressIdColumn1642776261480 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("company", "fk_company_address");
    await queryRunner.dropColumn("company", "address_id");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("company", new TableColumn({ name: "address_id", type: "uuid" }));
    await queryRunner.createForeignKey("company", new TableForeignKey({
      name: 'fk_company_address',
      columnNames: ["address_id"],
      referencedTableName: "address",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
    }));
  }

}
