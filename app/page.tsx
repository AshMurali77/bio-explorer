import Alignment from "./components/cards/Alignment";

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className=" mx-8 items-center justify-center font-sans">
        <h1 className="text-3xl font-bold mx-auto my-3">
          Bioinformatics Timeline
        </h1>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-800"></div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-2 divide-gray-900">
            <Alignment />
            <div className="relative flex justify-center ">
              <div className="w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-950 z-10" />
            </div>
            <Alignment />
            <Alignment />
            <div className="relative flex justify-center">
              <div className="w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-950 z-10" />
            </div>
            <Alignment />
          </div>
        </div>
      </div>
    </main>
  );
}
