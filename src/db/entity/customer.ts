import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "../base/core-entity";

@Entity()
export class Customer extends CoreEntity {

    @Column({
        length: 100
    })
    name: string;
}