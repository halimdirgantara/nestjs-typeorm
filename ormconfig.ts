import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs_typeorm',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true, // dont use true in production 
    // using migration uin production
    // migrations: [
    //     'dist/src/db/migrations/*.js'
    // ],
    // cli: {
    //     migrationsDir: 'src/db/migrations'
    // }
}

export default config;