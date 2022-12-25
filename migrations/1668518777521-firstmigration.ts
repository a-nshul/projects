import { MigrationInterface, QueryRunner } from "typeorm";

export class firstmigration1668518777521 implements MigrationInterface {
    name = 'firstmigration1668518777521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`AddressLine1\` varchar(255) NOT NULL, \`AddressLine2\` varchar(255) NOT NULL, \`City\` varchar(255) NOT NULL, \`PostalCode\` varchar(255) NOT NULL, \`Country\` varchar(255) NOT NULL, \`Phone\` varchar(255) NOT NULL, \`Mobile\` varchar(255) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart_items\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`ProductId\` int NOT NULL, \`Quantity\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customer\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`FirstName\` varchar(255) NOT NULL, \`LastName\` varchar(255) NOT NULL, \`Email\` varchar(255) NOT NULL, \`Phone\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_items\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`OrderId\` int NOT NULL, \`ProductId\` int NOT NULL, \`Quantity\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CustomerId\` int NOT NULL, \`PaymentId\` int NOT NULL, \`Total\` varchar(255) NOT NULL, \`AccountNumber\` int NOT NULL, \`Expire\` datetime NOT NULL, \`PaymentType\` varchar(50) NOT NULL, \`Provider\` varchar(50) NOT NULL, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment_details\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`OrderId\` int NOT NULL, \`Amount\` int NOT NULL, \`Provider\` varchar(50) NOT NULL, \`Status\` varchar(50) NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NOT NULL, \`Desc\` varchar(255) NOT NULL, \`CreatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NOT NULL, \`Desc\` varchar(255) NOT NULL, \`CreatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NOT NULL, \`Desc\` varchar(255) NOT NULL, \`SKU\` varchar(255) NOT NULL, \`CategoryId\` int NULL, \`InventoryId\` int NULL, \`Price\` varchar(255) NOT NULL, \`CreatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`inventory\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`payment_details\``);
        await queryRunner.query(`DROP TABLE \`order_details\``);
        await queryRunner.query(`DROP TABLE \`order_items\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
        await queryRunner.query(`DROP TABLE \`cart_items\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
