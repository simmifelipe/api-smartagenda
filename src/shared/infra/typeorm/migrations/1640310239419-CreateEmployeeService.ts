import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeeService1640310239419 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employee_service",
        columns: [
          { name: "employee_id", type: "uuid" },
          { name: "service_id", type: "uuid" },
          { name: "duration", type: "integer", isNullable: false },
          { name: "price", type: "decimal", isNullable: false },
          { name: "commission", type: "decimal" },
        ],
        foreignKeys: [
          {
            name: "fk_employee_service",
            columnNames: ["employee_id"],
            referencedTableName: "employee",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_service_employee",
            columnNames: ["service_id"],
            referencedTableName: "service",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employee_service");
  }
}
