import WorkflowHeader from "@/app/components/timeline/WorkflowHeader";
import { RNASEQ_DE_TIMELINE_ITEMS } from "../../components/timeline/TimelineItem";
import TimelineRow from "../../components/timeline/TimelineRow";
import { getWorkflows, getWorkflowStep } from "@/app/lib/data";

export default async function Page({params}:{params: Promise<{slug: string}>}) {
  //fetch relevant data
  const {slug} = await params;
  const allWorkflows = await getWorkflows();
  const workflow = allWorkflows.find(w=>w.slug === slug);

  const STEPS = await getWorkflowStep(slug);

  return (
    <main className="min-h-screen py-8">  
      <div className=" mx-12 items-center justify-center font-sans">
        <WorkflowHeader title={ workflow?.title} description={workflow?.description} />
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-800"></div>
          {STEPS.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return <TimelineRow key={item.id} item={item} side={side} />;
          })}
        </div>
      </div>
    </main>
  );
}
