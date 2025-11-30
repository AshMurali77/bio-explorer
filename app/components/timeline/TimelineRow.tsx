import { TIMELINE_CARD } from "@/app/lib/definitions";
import TimelineCard from "./TimelineCard";
export default function TimelineRow({
  item,
  side,
}: {
  item: TIMELINE_CARD;
  side: "left" | "right";
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-2 divide-gray-900">
      {/*LEFT COLUMN*/}
      {side === "left" ? (
        <TimelineCard
          id={item.id}
          title={item.title}
          description={item.description}
          tags={item.technologies}
        />
      ) : (
        <div />
      )}
      {/*CENTER LINE SPACE*/}
      <div className="relative flex justify-center ">
        <div className="w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-950 z-10" />
      </div>
      {/*RIGHT COLUMN*/}
      {side === "right" ? (
        <TimelineCard
          id={item.id}
          title={item.title}
          description={item.description}
          tags={item.technologies}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
