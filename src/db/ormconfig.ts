import { ConnectionOptions, DataSource } from 'typeorm';
//const Ormconfig_1 = require("./C:\Users\Administrator\nestjs_mysql_crud_app\src\db\ormconfig.ts");
// Check typeORM documentation for more information.
//const config: ConnectionOptions = {
export const AppDataSource = new DataSource({
    name: "default",
    type: "mysql",
    host: "3.108.19.157",
    port: 3306,
    username: "interns",
    password: "interns@!@#$%^&*(",
    database: "interns_ecommerce",
    entities: [__dirname + '/*/*.entity{.ts,.js}'],
    migrations: [
        __dirname + "/migration/**/*{.js,.ts}"
    ],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',

    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    // migrations: ['migrations/*/{.ts,.js}'],

})
     //export = config;