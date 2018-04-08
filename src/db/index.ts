import { Sequelize } from 'sequelize-typescript';
import { Customer } from "./models/Customer";

export const sequelize = new Sequelize({
    dialect: 'postgres', // 'mysql'|'sqlite'|'postgres'|'mssql',
    database: process.env.DB_DATABASE ||  'sample',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS,
    modelPaths: [__dirname + '/models']
});


export async function dbSeed() {
    await Customer.create<Customer>({ id: "231231", code: '01', name: 'Tanser' });
}
