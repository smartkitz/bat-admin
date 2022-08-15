import { DataSource } from 'typeorm';
import { PROJ_CNST } from './constants/proj.cnst';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: PROJ_CNST.DB_HOST,
    port: PROJ_CNST.DB_PORT,
    username: PROJ_CNST.DB_USERNAME,
    password: PROJ_CNST.DB_PASSWORD,
    database: PROJ_CNST.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        './models/*.ts'
    ],
    subscribers: [],
    migrations: [],
})