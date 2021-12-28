import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePaymentType1640721467132 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "payment_type",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "description",
          type: "varchar",
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
    }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("payment_type");
  }

}
