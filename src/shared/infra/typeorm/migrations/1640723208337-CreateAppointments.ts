import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1640723208337 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "appointment",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "date",
          type: "timestamp",
        },
        {
          name: "time",
          type: "time",
        },
        {
          name: "duration",
          type: "numeric",
        },
        {
          name: "price",
          type: "numeric",
        },
        {
          name: "payment_status",
          type: "enum",
          enum: ["pending", "paid", "partial"],
        },
        {
          name: "customer_id",
          type: "uuid",
        },
        {
          name: "service_id",
          type: "uuid",
        },
        {
          name: "employee_id",
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
          name: "fk_appointment_customer",
          columnNames: ["customer_id"],
          referencedTableName: "customer",
          referencedColumnNames: ["id"],
        },
        {
          name: "fk_appointment_service",
          columnNames: ["service_id"],
          referencedTableName: "service",
          referencedColumnNames: ["id"],
        },
        {
          name: "fk_appointment_employee",
          columnNames: ["employee_id"],
          referencedTableName: "employee",
          referencedColumnNames: ["id"],
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointment");
  }

}
