import sql from "./db"
import { WORKFLOW, TIMELINE_CARD } from './definitions';

export async function getWorkflows(): Promise<WORKFLOW[]> {
  try {
    console.log('Fetching workflows...');
    const data = await sql<WORKFLOW[]>`SELECT * FROM workflows`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workflow data.');
  }
}

export async function getWorkflowStep(workflow_slug: string): Promise<TIMELINE_CARD[]> {
  try {
    console.log('Fetching timeline card information...');
    const data = await sql<TIMELINE_CARD[]>`
        SELECT ws.id, ws.page_slug, s.title, s.description, s.technologies FROM workflow_steps ws 
            JOIN workflows w on ws.workflow_id = w.id
            JOIN steps s on ws.step_id = s.id
            WHERE w.slug = ${workflow_slug}
            ORDER BY ws.step_order;
    `;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workflow data.');
  }
}
