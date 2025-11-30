// contains type definitions for the data
export type WORKFLOW = {
    id: string,
    slug: string,
    title: string,
    description?: string,
}

export type TIMELINE_CARD = {
    id: string;
    title: string;
    content: string;
    tags: string[];
}