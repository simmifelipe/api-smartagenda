import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateService1639514298129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "service",
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
                    name: "company_id",
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
                },
            ],
            foreignKeys: [
                {
                    name: "fk_service_company",
                    columnNames: ["company_id"],
                    referencedTableName: "company",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('service');
    }

}
