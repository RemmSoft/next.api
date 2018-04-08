import {
    Model, Column, Table, BelongsToMany, Scopes, PrimaryKey,
    CreatedAt, UpdatedAt, DefaultScope
} from "sequelize-typescript";

@Table
export class Customer extends Model<Customer> {

    @PrimaryKey
    @Column id: string;
    @Column code: string;
    @Column name: string;
}