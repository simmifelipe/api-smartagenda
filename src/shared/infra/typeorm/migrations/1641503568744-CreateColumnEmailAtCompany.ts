import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateColumnEmailAtCompany1641503568744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("company", new TableColumn({
            name: "email",
            type: "varchar",
            isNullable: true,
        })) 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("company", "email")
    }

}
