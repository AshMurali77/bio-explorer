import sql from "./db"
import { WORKFLOW, TIMELINE_CARD } from './definitions';

export async function getWorkflows(): Promise<WORKFLOW[]> {
  try {
    console.log('Fetching workflows...');
    const data = await sql<WORKFLOW[]>`SELECT * FROM workflows`;

    console.log(data)
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workflow data.');
  }
}

export async function getWorkflowStep(workflow_slug: string): Promise<TIMELINE_CARD[]> {
  try {
    console.log('Fetching timeline card information...');
    const data = await sql<TIMELINE_CARD[]>`SELECT step_id FROM workflow_steps WHERE id = ${workflow_slug}`;

    console.log(data)
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workflow data.');
  }
}
