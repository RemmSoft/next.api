import { Connection } from "typeorm";
import { Customer } from "./entity/customer";

export async function dbSeed(connection: Connection) {
    const customer = new Customer();
    customer.name = 'Tanser';

    const customerRepository = connection.getRepository(Customer);
    return customerRepository.save(customer);
}