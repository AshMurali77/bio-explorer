import Alignment from "./components/cards/Alignment";
import { TIMELINE_ITEMS } from "./components/timeline/TimelineItem";
import TimelineRow from "./components/timeline/TimelineRow";
export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className=" mx-12 items-center justify-center font-sans">
        <h1 className="text-3xl font-bold mx-auto my-3">
          Bioinformatics Timeline
        </h1>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-800"></div>
              {TIMELINE_ITEMS.map((item, index)=>{
                const side = (index%2 === 0) ? "left" : "right" 
                return <TimelineRow key={item.id} item={item} side={side}/>
              })}
        </div>
      </div>
    </main>
  );
}
