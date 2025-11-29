import WorkflowHeader from "@/app/components/timeline/WorkflowHeader";
import { RNASEQ_DE_TIMELINE_ITEMS } from "../../components/timeline/TimelineItem";
import TimelineRow from "../../components/timeline/TimelineRow";
export default function Page() {
  const title = "RNA-seq Differential Expression Workflow";
  const description =
    "A complete pipeline for quantifying gene or transcript expression from RNA sequencing data. This workflow covers raw read QC, trimming, alignment or pseudo-alignment, quantification, and statistical differential expression, enabling discovery of transcriptional changes across conditions.";
  return (
    <main className="min-h-screen py-8">  
      <div className=" mx-12 items-center justify-center font-sans">
        <WorkflowHeader title={title} description={description} />
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-800"></div>
          {RNASEQ_DE_TIMELINE_ITEMS.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return <TimelineRow key={item.id} item={item} side={side} />;
          })}
        </div>
      </div>
    </main>
  );
}
