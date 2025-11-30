import Link from "next/link";
export default function TimelineCard({
  id,
  title,
  description,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Link href={`./details/${id}`}>
      <div className="bg-slate-400 rounded overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:bg-slate-400/80 hover:ring-2 hover:ring-sky-400/60">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
