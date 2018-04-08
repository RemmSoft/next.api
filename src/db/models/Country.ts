import { Column, DefaultScope, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table
export class Country extends Model<Country> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    code: string;

    @Column
    name: string;
}