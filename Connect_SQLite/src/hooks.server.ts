import type { Handle } from "@sveltejs/kit";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = await open ({ filename: './src/mydatabase.db', driver: sqlite3.Database })

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.db = db
    const response = await resolve(event);
    return response;

};
