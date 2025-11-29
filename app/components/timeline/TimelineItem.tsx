export interface TimelineItem {
    id: string,
    title: string,
    content: string,
    tags: string[];
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "qc",
    title: "Read Quality Control",
    content: "Check raw sequencing reads with FastQC / MultiQC.",
    tags: ["kallisto", "pysam"],
  },
  {
    id: "trimming",
    title: "Adapter Trimming",
    content: "Remove adapters and low-quality bases with Cutadapt / fastp.",
    tags: ["fastp"],
  },
  {
    id: "alignment",
    title: "Alignment",
    content: "Map reads to a reference genome using BWA or STAR.",
    tags: ["STAR", "BWA", "kallisto"],
  },
  {
    id: "postproc",
    title: "Post-processing",
    content: "Sort, mark duplicates, and index BAM files.",
    tags: ["STAR", "BWA", "bcftools"],
  },
];