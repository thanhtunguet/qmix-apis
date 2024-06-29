import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT, 10) || 5432;
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || 'qmix';
export const DB_SCHEMA = process.env.DB_SCHEMA || 'public';
