import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationMigration1668519099439 implements MigrationInterface {
    name = 'RelationMigration1668519099439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`AddressLine1\` varchar(255) NOT NULL, \`AddressLine2\` varchar(255) NOT NULL, \`City\` varchar(255) NOT NULL, \`PostalCode\` varchar(255) NOT NULL, \`Country\` varchar(255) NOT NULL, \`Phone\` varchar(255) NOT NULL, \`Mobile\` varchar(255) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart_items\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`ProductId\` int NOT NULL, \`Quantity\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`PaymentId\` int NOT NULL, \`Total\` varchar(255) NOT NULL, \`AccountNumber\` int NOT NULL, \`Expire\` datetime NOT NULL, \`PaymentType\` varchar(50) NOT NULL, \`Provider\` varchar(50) NOT NULL, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_items\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`OrderId\` int NOT NULL, \`ProductId\` int NOT NULL, \`Quantity\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`OrderId\` int NOT NULL, \`Amount\` int NOT NULL, \`Provider\` varchar(50) NOT NULL, \`Status\` varchar(50) NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`payment_details\``);
        await queryRunner.query(`DROP TABLE \`order_items\``);
        await queryRunner.query(`DROP TABLE \`order_details\``);
        await queryRunner.query(`DROP TABLE \`cart_items\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
