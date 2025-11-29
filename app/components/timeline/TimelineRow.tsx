import { TimelineItem } from "./TimelineItem";

export default function TimelineRow({
  item,
  side,
}: {
  item: TimelineItem;
  side: "left" | "right";
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-2 divide-gray-900">
      {/*LEFT COLUMN*/}
      {side === "left" ? (
        <div className="bg-slate-400 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.content}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {item.tags.map((tag) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      ): <div/>}
      {/*CENTER LINE SPACE*/}
      <div className="relative flex justify-center ">
        <div className="w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-950 z-10" />
      </div>
      {/*RIGHT COLUMN*/}
      {side === "right" ? (
        <div className="bg-slate-400 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.content}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {item.tags.map((tag) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      ): <div/>}
    </div>
  );
}
