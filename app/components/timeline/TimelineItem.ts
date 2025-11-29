export interface TimelineItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
}
export const WORKFLOWS = [
  { id: "rna-seq", name: "RNA-seq Analysis", href: "/workflows/rna-seq" },
  {
    id: "variant-calling",
    name: "Variant Calling (DNA)",
    href: "/workflows/variant-calling",
  },
];

export const WGS_VARIANT_TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "qc",
    title: "Raw Read Quality Control",
    content:
      "Initial quality checks on FASTQ files to detect sequencing failures, adapter contamination, overrepresented sequences, and quality score drops. QC ensures that only high-quality input is used downstream and identifies whether trimming is needed.",
    tags: ["FastQC", "MultiQC"],
  },
  {
    id: "trimming",
    title: "Adapter & Quality Trimming",
    content:
      "Removes sequencing adapters, low-quality trailing bases, and poly-G artifacts. Trimming improves mapping rate and reduces false variant calls from low-quality regions.",
    tags: ["Trimmomatic", "Cutadapt", "fastp"],
  },
  {
    id: "alignment",
    title: "Alignment to Reference Genome",
    content:
      "Reads are aligned to a reference genome (e.g., GRCh38) to produce SAM/BAM files. Aligners use scoring matrices and seed-based strategies to find optimal mapping positions.",
    tags: ["BWA-MEM2", "Bowtie2"],
  },
  {
    id: "postproc",
    title: "Post-alignment Processing",
    content:
      "Sorting, indexing, marking duplicates, and calculating alignment statistics. These steps are essential to prepare alignments for variant calling and reduce PCR artifacts.",
    tags: ["Samtools", "Sambamba", "Picard"],
  },
  {
    id: "variantcalling",
    title: "Variant Calling",
    content:
      "Identifies SNPs and indels by analyzing read pileups. Variant callers model sequencing noise and haplotypes to generate VCF files containing variant candidates.",
    tags: [
      "bcftools mpileup/call",
      "GATK HaplotypeCaller",
      "FreeBayes",
      "LoFreq",
    ],
  },
  {
    id: "variantfiltering",
    title: "Variant Filtering & Annotation",
    content:
      "Apply quality filters (depth, MQ, QUAL score) and annotate variants with biological significance (gene impact, ClinVar pathogenicity, population frequency).",
    tags: ["bcftools filter", "VEP", "ANNOVAR", "SnpEff"],
  },
];

export const RNASEQ_DE_TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "qc",
    title: "Raw Read Quality Control",
    content:
      "Initial quality checks on FASTQ files to detect sequencing failures, adapter contamination, overrepresented sequences, and quality score drops. QC ensures that only high-quality input is used downstream and identifies whether trimming is needed.",
    tags: ["FastQC", "MultiQC"],
  },

  {
    id: "trimming",
    title: "Adapter & Quality Trimming",
    content:
      "Removes sequencing adapters and low-quality trailing bases that degrade alignment performance and bias expression estimates. Trimming improves mappability, reduces noise, and corrects sequencing artifacts frequently present at read ends.",
    tags: ["Cutadapt", "TrimGalore", "fastp"],
  },

  {
    id: "alignment",
    title: "Alignment or Pseudo-alignment",
    content:
      "Reads are mapped to a reference genome or transcriptome to determine their origin. Full aligners (STAR, HISAT2) provide precise genomic mapping, while pseudoaligners (Salmon, Kallisto) estimate transcript abundance without full alignment, enabling faster processing with comparable accuracy.",
    tags: ["STAR", "HISAT2", "Salmon", "Kallisto"],
  },

  {
    id: "quantification",
    title: "Gene / Transcript Quantification",
    content:
      "Counts the number of reads aligned to genes or estimates transcript-level abundance. This step outputs a matrix linking each gene or transcript to its corresponding expression level, forming the foundation for differential expression analysis.",
    tags: ["featureCounts", "HTSeq-count", "Salmon", "Kallisto"],
  },

  {
    id: "de-analysis",
    title: "Differential Expression Analysis",
    content:
      "Statistical modeling is applied to detect genes whose expression levels differ significantly across conditions. Tools such as DESeq2, edgeR, and limma-voom account for biological variability, library size differences, and dispersion to compute adjusted p-values and fold changes.",
    tags: ["DESeq2", "edgeR", "limma"],
  },

  {
    id: "interpretation",
    title: "Biological Interpretation",
    content:
      "Significantly regulated genes are mapped to pathways, functional categories, and biological networks. Enrichment tools help reveal underlying cellular processes, regulatory programs, and phenotype-driven changes that explain the experimental system.",
    tags: ["GSEA", "clusterProfiler", "Enrichr"],
  },
];
