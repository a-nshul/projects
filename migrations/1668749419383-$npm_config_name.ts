import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1668749419383 implements MigrationInterface {
    name = '$npmConfigName1668749419383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`PaymentId\` int NOT NULL, \`Total\` varchar(255) NOT NULL, \`AccountNumber\` int NOT NULL, \`Expire\` datetime NOT NULL, \`PaymentType\` varchar(50) NOT NULL, \`Provider\` varchar(50) NOT NULL, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`order_details\``);
    }

}
