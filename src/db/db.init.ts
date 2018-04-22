import { createConnection, getConnectionOptions } from "typeorm";
import { dbSeed } from "./db.seed";
import { Customer } from "./entity/customer";

export async function dbInit() {

    const connectionOptions = await getConnectionOptions();

    Object.assign(connectionOptions,
        {
            entities: [
                Customer
            ],
            synchronize: false,
            logging: ['error', 'query', 'schema'],
        });

    const conn = await createConnection(connectionOptions);

    await dbSeed(conn);

    return conn;
}
