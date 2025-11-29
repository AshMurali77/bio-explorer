import Link from "next/link";
import { WORKFLOWS } from "../timeline/TimelineItem";

export default function WorkflowDropdown() {
  return (
    <div className="relative group">
      <button className="hover:text-sky-400 transition-colors flex items-center gap-1">
        Workflows
      </button>

      <div
        className="
      absolute left-1/2 -translate-x-1/2 top-full
      w-48 
      bg-slate-900/95 backdrop-blur-md 
      border border-slate-700 
      rounded-lg shadow-lg 
      opacity-0 pointer-events-none
      group-hover:opacity-100 group-hover:pointer-events-auto
      hover:opacity-100 hover:pointer-events-auto
      transition-opacity duration-150
      z-50
    "
      >
        <div className="py-2 flex flex-col text-sm">
          {WORKFLOWS.map((wf) => (
            <Link
              key={wf.id}
              href={wf.href}
              className="
            px-4 py-2 
            hover:bg-slate-800/70 
            hover:text-sky-400 
            transition-colors
          "
            >
              {wf.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
