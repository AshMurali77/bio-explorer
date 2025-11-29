import WorkflowHeader from "@/app/components/timeline/WorkflowHeader";
import { WGS_VARIANT_TIMELINE_ITEMS } from "../../components/timeline/TimelineItem";
import TimelineRow from "../../components/timeline/TimelineRow";
export default function Page() {
  const title = "WGS Variant Calling Workflow";
  const description =
    "A standardized workflow for identifying SNPs and small indels from whole-genome sequencing data. It includes quality control, trimming, alignment, post-alignment processing, variant calling, and filtering to produce high-confidence variant calls for downstream analysis.";
  return (
    <main className="min-h-screen py-8">
      <div className=" mx-12 items-center justify-center font-sans">
        <WorkflowHeader title={title} description={description} />  
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-800"></div>
          {WGS_VARIANT_TIMELINE_ITEMS.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return <TimelineRow key={item.id} item={item} side={side} />;
          })}
        </div>
      </div>
    </main>
  );
}
