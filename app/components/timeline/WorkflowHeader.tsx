type WorkflowHeaderProps = {
  title?: string;
  description?: string;
};

export default function WorkflowHeader({ title, description }: WorkflowHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h1>

      <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

      {/*subtle divider */}
      <div className="mt-6 h-px w-24 bg-sky-500/40 mx-auto rounded-full"></div>
    </div>
  );
}
