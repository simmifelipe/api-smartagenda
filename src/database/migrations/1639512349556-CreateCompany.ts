import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompany1639512349556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "company",
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
                    name: "document",
                    type: "varchar",
                },
                {
                    name: "phone",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "address_id",
                    type: "uuid",
                },
                {
                    name: 'created_at',
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: 'updated_at',
                    type: "timestamp",
                    default: "now()",
                }
            ]
        }));

        await queryRunner.createForeignKey("company", new TableForeignKey({
            columnNames: ["address_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "address",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company");
    }

}
