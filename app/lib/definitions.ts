// contains type definitions for the data
export type WORKFLOW = {
    id: string;
    slug: string;
    title: string;
    description?: string;
}

export type TIMELINE_CARD = {
    id: string;
    page_slug: string; 
    title: string;
    description: string;
    technologies: string[];
}

export type CodeSnippet = {
    label: string;
    language: string;
    code: string;
}

export type WORKFLOW_STEP = {
    id: string;
    slug: string;
    step_order: number;
    workflow_title: string;
    title: string;
    common_tools: string[] | null;
    why_important: string  | null;
    example?: string  | null;
    code_snippets?: CodeSnippet[]  | null;
}

