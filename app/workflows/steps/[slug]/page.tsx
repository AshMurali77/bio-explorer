
/* const quantificationStep = {
  id: "rna-quantification",
  title: "Gene / Transcript Quantification",
  commonTools: ["featureCounts", "HTSeq-count", "Salmon", "Kallisto"],
  whyImportant:
    "Quantification is the point where raw aligned reads (or pseudo-aligned reads) become something biologically interpretable: expression values per gene or transcript. Every downstream analysis — differential expression, clustering, pathway enrichment — depends on the quality of this count matrix. Good quantification ensures that reads are assigned correctly to features, handles multimapping and strandedness appropriately, and produces counts that accurately reflect the underlying biology rather than technical artifacts.",
  example:
    "Imagine you’ve run STAR to align your trimmed RNA-seq reads and now have a coordinate-sorted BAM file (`sample_Aligned.sortedByCoord.out.bam`) plus an annotation file (`annotation.gtf`). You can run featureCounts to generate a gene-level count table, or use Salmon directly on trimmed FASTQ files to get transcript-level abundances.",
  codeSnippets: [
    {
      label: "featureCounts for gene-level counts",
      language: "bash",
      code: `featureCounts \\
  -T 8 \\
  -a annotation.gtf \\
  -o counts.txt \\
  sample_Aligned.sortedByCoord.out.bam`,
    },
    {
      label: "Salmon quantification from trimmed reads",
      language: "bash",
      code: `salmon quant \\
  -i transcripts_index \\
  -l A \\
  -1 sample_R1.trimmed.fastq.gz \\
  -2 sample_R2.trimmed.fastq.gz \\
  -p 8 \\
  -o salmon_quant/`,
    },
  ],
}; */

import { getWorkflowStepDetails } from "@/app/lib/data";

export default async function Page({params}:{params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const [workflowStep] = await getWorkflowStepDetails(slug); 
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* TITLE + TOOLS */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {workflowStep.title}
          </h1>

          <p className="text-sm text-slate-400 mb-4">
            {workflowStep.workflow_title} · Step {workflowStep.step_order}
          </p>

          <div className="flex flex-wrap gap-2">
            {workflowStep.common_tools?.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-sky-500/40 bg-slate-900/60 px-3 py-1 text-xs text-sky-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* WHY IMPORTANT */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Why this step is important</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {workflowStep.why_important}
          </p>
        </section>

        {/* EXAMPLE */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Example</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {workflowStep.example}
          </p>
        </section>

        {/* CODE SNIPPETS */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Code snippets</h2>

          <div className="space-y-6">
            {workflowStep.code_snippets?.map((snippet) => (
              <div
                key={snippet.label}
                className="rounded-lg border border-slate-800 bg-slate-950/70 p-4"
              >
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {snippet.label}
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                    {snippet.language}
                  </span>
                </div>

                <pre className="mt-1 overflow-x-auto rounded-md bg-black/60 p-3 text-xs text-slate-100">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* BACK LINK / CTA */}
        <section className="pt-4 border-t border-slate-800 mt-8 text-xs text-slate-500">
          <p>
            This step is part of the {workflowStep.workflow_title}
            {/* Maybe replace with a Link back to the workflow timeline */}
          </p>
        </section>
      </div>
    </main>
  );
}
