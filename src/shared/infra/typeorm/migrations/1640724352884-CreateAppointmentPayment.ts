import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointmentPayment1640724352884 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "appointment_payment",
      columns: [
        {
          name: "appointment_id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "payment_type_id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "date",
          type: "timestamp",
        },
        {
          name: "value",
          type: "numeric",
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
          name: "fk_appointment_payment",
          columnNames: ["appointment_id"],
          referencedTableName: "appointment",
          referencedColumnNames: ["id"],
        },
        {
          name: "fk_appointment_payment_type",
          columnNames: ["payment_type_id"],
          referencedTableName: "payment_type",
          referencedColumnNames: ["id"],
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointment_payment");
  }

}
