import { PrimaryGeneratedColumn } from "typeorm";

export abstract class CoreEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

}