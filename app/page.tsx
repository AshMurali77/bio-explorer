// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Centered content container */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Bioinformatics Workflow Explorer
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            An interactive notebook for learning, visualizing, and comparing
            common bioinformatics workflows. Follow timelines, explore shared
            steps across pipelines, and connect each step to real tools and code
            examples.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/workflows/rna-seq"
              className="
                bg-sky-500 text-white 
                px-5 py-2.5 rounded-lg 
                text-sm font-medium
                transition-all duration-200 
                hover:bg-sky-400 
                hover:-translate-y-0.5 
                hover:shadow-[0_0_16px_rgba(56,189,248,0.45)]
              "
            >
              View RNA-seq Workflow
            </Link>

            <Link
              href="/workflows/variant-calling"
              className="
                bg-slate-800/70 
                border border-slate-700 
                text-slate-200 
                px-5 py-2.5 rounded-lg 
                text-sm font-medium
                transition-all duration-200 
                hover:bg-slate-700 
                hover:border-sky-400 
                hover:text-white
              "
            >
              View WGS Variant Calling
            </Link>
          </div>
        </section>

        {/* ABOUT / PURPOSE SECTION */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-semibold mb-3">What is this?</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              This project is a personal bioinformatics knowledge base shaped as
              an interactive timeline. Each workflow is broken into clear,
              visual steps: quality control, alignment, quantification,
              variant calling, and more. Clicking a step opens a dedicated page
              with common tools, why the step matters, and example commands.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Over time, the goal is to capture reusable patterns across
              workflows so that core concepts,like alignment or QC,become
              intuitive regardless of whether you&apos;re working with DNA,
              RNA, or other omics data.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-sm">
            <h3 className="font-semibold mb-2">How to use this explorer</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Choose a workflow from the navbar dropdown (e.g., RNA-seq, WGS
                  variant calling).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Scroll through the timeline to see each step and where it
                  sits in the pipeline.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Click a card to open a step page with explanations, tools,
                  and code snippets.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Compare steps across workflows to spot patterns and
                  transferable skills.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* FEATURE CALLOUTS / GOALS SECTION */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-center">
            What this project is optimizing for
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Learning by workflows</h3>
              <p className="text-slate-400">
                Anchor concepts to real pipelines instead of isolated commands.
                Each step is documented with tooling, context, and examples.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Reusable knowledge</h3>
              <p className="text-slate-400">
                Highlight steps that appear in multiple workflows—like QC,
                alignment, and quantification—to make skills portable across
                projects.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Code-first notes</h3>
              <p className="text-slate-400">
                Every step aims to include concrete commands or snippets, so the
                notes are directly executable and version-controlled.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER / SMALL NOTE */}
        <section className="pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
          <p>
            Built as a personal learning tool and living notebook for
            bioinformatics workflows. Incrementally expanded over time.
          </p>
        </section>
      </div>
    </main>
  );
}
