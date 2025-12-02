# **Bioinformatics Explorer**

---

## Live Application: [https://bio-explorer.vercel.app/](https://bio-explorer.vercel.app/)
---
Bioinformatics Explorer is a full-stack TypeScript application built with Next.js, Tailwind CSS, Supabase (PostgreSQL), and Vercel.
It provides an interactive way to explore bioinformatics workflows such as RNA-seq analysis and WGS variant calling.
Each workflow is displayed as a visual timeline with alternating steps, and each step links to a detailed page explaining the underlying biology, tools, examples, and real command-line code.

This project is designed to demonstrate modern web engineering skills while showcasing knowledge of computational biology and bioinformatics pipelines.

---

## **Features**

### **Interactive Workflow Timelines**

* Alternating vertical timeline design
* Each step shows a concise overview
* Clicking a step opens a full detail page

### **Step Detail Pages**

Each step page includes:

* Full overview of the bioinformatics task
* Explanation of why the step is important
* Common tools used in practice
* Concrete example of the step
* Code snippets (Bash, R, etc.)
* Responsive design using Tailwind CSS

### **Database-Driven Architecture**

Workflows and their steps are stored in a normalized PostgreSQL schema:

* `workflows` table: high-level workflows
* `steps` table: canonical steps common across workflows
* `workflow_steps` table: ordering and workflow-specific metadata
* `code_snippets` stored as JSONB
* Fetched via server components with strong TypeScript typing

### **Dynamic Rendering**

* Navbar workflows are fetched from the database
* Workflow pages populate dynamically by slug
* Step pages fetch metadata based on `page_slug`
* No hardcoded workflow definitions

### **Modern Next.js Application**

* App Router
* Server Components for data loading
* Client Components for interactive UI
* Typesafe database access via postgres.js

---

## **Tech Stack**

### Frontend

* Next.js 14 (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Supabase PostgreSQL
* postgres.js (SQL-first database access)
* Normalized schema with foreign keys, array columns, and JSONB

### Deployment

* Vercel (automatic deployments)
* Environment-managed secrets

---

## **Database Schema**

### `workflows`

Stores high-level workflows.

```
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT
description TEXT
```

### `steps`

Canonical steps shared across workflows.

```
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT
description TEXT
technologies TEXT[]
```

### `workflow_steps`

Joins steps to workflows and stores workflow-specific metadata.

```
id UUID PRIMARY KEY
workflow_id UUID REFERENCES workflows(id)
step_id UUID REFERENCES steps(id)
step_order INTEGER
page_slug TEXT UNIQUE
common_tools TEXT[]
why_important TEXT
example TEXT
code_snippets JSONB
```

---

## **Project Setup**

Clone the repository:

```bash
git clone https://github.com/AshMurali77/bio-explorer
cd bio-explorer
npm install
```

Create a `.env.local` file:

```
DATABASE_URL="your-supabase-postgres-url"
```

Run locally:

```bash
npm run dev
```

---

## **Future Improvements**

* Graph-style visualization of shared steps across workflows
* Additional workflows (ATAC-seq, ChIP-seq, scRNA-seq)
* User accounts to store custom notes
* Step comparisons between workflows
* API routes for programmatic workflow access

---

## **Why This Project**

Bioinformatics pipelines are complex and share many conceptual components.
This project helps visualize:

* How workflows are structured
* Which steps overlap between workflows
* What tools are commonly used
* How each step is performed in practice

It also serves as a practical demonstration of:

* Full-stack TypeScript development
* SQL schema design and normalization
* Next.js App Router architecture
* Computational biology domain knowledge

---

## **Author**

Created by **Ash Murali**

Focus areas:

* Computational Biology
* Machine Learning
* Bioinformatics Pipelines
* Full-Stack Web Engineering


