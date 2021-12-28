import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomer1640720840184 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "customer",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "phone",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar"
        },
        {
          name: "address_id",
          type: "uuid",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          isNullable: true,
        },
      ],
      foreignKeys: [
        {
          name: "fk_customer_address",
          columnNames: ["address_id"],
          referencedTableName: "address",
          referencedColumnNames: ["id"],
          onDelete: "CASCADE",
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customer");
  }

}
