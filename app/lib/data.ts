import sql from "./db"
import { WORKFLOW } from './definitions';

export async function getWorkflows(): Promise<WORKFLOW[]> {
  try {
    console.log('Fetching workflows');
    const data = await sql<WORKFLOW[]>`SELECT * FROM workflows`;

    console.log(data)
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workflow data.');
  }
}


