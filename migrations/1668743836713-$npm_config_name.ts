import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1668743836713 implements MigrationInterface {
    name = '$npmConfigName1668743836713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`AddressLine1\` varchar(255) NOT NULL, \`AddressLine2\` varchar(255) NOT NULL, \`City\` varchar(255) NOT NULL, \`PostalCode\` varchar(255) NOT NULL, \`Country\` varchar(255) NOT NULL, \`Phone\` varchar(255) NOT NULL, \`Mobile\` varchar(255) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`PaymentId\` int NOT NULL, \`Total\` varchar(255) NOT NULL, \`AccountNumber\` int NOT NULL, \`Expire\` datetime NOT NULL, \`PaymentType\` varchar(50) NOT NULL, \`Provider\` varchar(50) NOT NULL, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`order_details\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
