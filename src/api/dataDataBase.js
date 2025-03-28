import { readData } from "../stores/dataStore";

export async function getTable(table) {
    const dbClients = await readData({
        table: table,
    });
    
    return dbClients

}
