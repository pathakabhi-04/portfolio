/**
 * THE ONLY FILE YOU NEED TO EDIT FOR CONTENT.
 * Every component reads from here. Nothing is hardcoded in the UI.
 * Long-form case studies live as .mdx files in src/content/work/.
 */

import type {
  Education,
  Experience,
  Profile,
  Project,
  Routes,
  SiteMeta,
  SkillGroup,
  Social,
} from "./types";

export const meta: SiteMeta = {
  baseUrl: "https://example.com", // TODO: your real domain, no trailing slash
  title: "Abhinav Pathak",
  description:
    "AI/ML engineer building computer vision and retrieval-augmented systems, with evaluation you can trust.",
  locale: "en",
};

/** Flip a section off until you have content for it. Nav hides it too. */
export const routes: Routes = {
  work: true,
  about: true,
  blog: false,
  contact: true,
};

export const profile: Profile = {
  name: "Abhinav Pathak",
  role: "AI/ML Engineer",
  tagline:
    "I build computer vision and retrieval systems, and I test them hard enough to know where they break.",
  location: "", // TODO: city, country
  email: "pathakabhinav0405@gmail.com",
  avatar: "/images/avatar.jpg",
  resumeUrl: "", // set to "/resume.pdf" once the file is in public/
  about: [
    "I'm a B.Tech Computer Science student who builds end-to-end AI systems, from dataset splits and model training to a served API. My work sits where computer vision meets language: detection, segmentation and tracking on one side, retrieval-augmented generation on the other, and pipelines that connect the two.",
    "My main project, DermaSense, is an eight-stage skin-lesion analysis pipeline with a RAG layer that explains results in plain language. On the language side I design retrieval systems from scratch, combining BM25 and dense search with rank fusion, cross-encoder reranking, a confidence gate that refuses to answer when evidence is weak, and citations assembled in code rather than by the model. I'm currently building TemporalRAG, which makes CCTV and dashcam footage searchable in natural language.",
    "What I care about most is honest evaluation. I set the pass or fail rule for each experiment before running it, split data by patient so no one appears in both training and test, and test on sources the model has never seen. When four experiments showed our melanoma gap was a data problem and not a model problem, I wrote it up as a negative result and narrowed the product to what the evidence supported.",
    "I'm looking for ML and computer vision engineering roles, especially in healthcare or other high-stakes fields where \"how do we know this works?\" matters as much as the model.",
  ],
};

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/pathakabhi-04", primary: true },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abhinav-pathak-882733343", primary: true },
  // Hidden until the profile has more solved problems. Uncomment to show it again.
  // { name: "LeetCode", url: "https://leetcode.com/u/abhii_pathak/" },
  { name: "Email", url: `mailto:${profile.email}`, primary: true },
];

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "C++", "SQL", "Bash"],
  },
  {
    group: "Computer Vision",
    items: [
      "PyTorch",
      "torchvision",
      "Ultralytics YOLO (v8, 11)",
      "U-Net segmentation",
      "ResNet-50 transfer learning",
      "ByteTrack multi-object tracking",
      "OpenCV",
      "FFmpeg",
      "LLaVA-7B (4-bit)",
      "Grad-CAM",
      "Uncertainty estimation",
      "Domain generalization",
      "Temporal event reasoning",
      "Keyframe selection",
    ],
  },
  {
    group: "NLP & LLMs",
    items: [
      "Retrieval-augmented generation",
      "Hybrid retrieval (BM25 + dense)",
      "Reciprocal Rank Fusion",
      "Cross-encoder reranking",
      "Query rewriting",
      "Conversational memory",
      "Confidence gating",
      "Grounded citations",
      "HuggingFace Transformers",
      "sentence-transformers",
      "Tokenization (BPE, WordPiece)",
      "Embedding fine-tuning",
      "Structured outputs",
      "Function calling",
      "Model Context Protocol (MCP), learning",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Groq API",
      "Gemini API",
    ],
  },
  {
    group: "Evaluation",
    items: [
      "RAGAS",
      "Precision@k, Recall@k, MRR",
      "LLM-as-judge",
      "Gold dataset construction",
      "Patient-grouped cross-validation",
      "Leave-one-source-out testing",
      "Wilson confidence intervals",
      "Pre-registered pass/fail criteria",
    ],
  },
  {
    group: "Backend & Data",
    items: [
      "FastAPI",
      "Pydantic",
      "Async Python",
      "REST APIs",
      "Rate limiting",
      "Semantic caching",
      "ChromaDB",
      "FAISS",
      "SQLite",
      "NumPy",
      "pandas",
      "scikit-learn",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Linux",
      "tmux",
      "pytest",
      "Streamlit",
      "RunPod",
      "Kaggle GPU",
      "HuggingFace Hub",
      "AWS CLI (S3)",
      "Render",
    ],
  },
  {
    group: "CS Fundamentals",
    items: [
      "Data structures & algorithms in C++ (intermediate)",
      "Comfortable with: arrays, strings, two pointers",
      "Learning: trees, graphs",
      "Dynamic programming: strong on concepts, building up implementation",
      "Easy to medium problems on my own",
      "Hard problems with a hint in the right direction",
    ],
  },
  {
    group: "Operating Systems",
    // Topics in progress. Move the "studying" note off once they're covered.
    items: [
      "Currently studying, in C++ on Linux",
      "Multithreading with pthreads (mutexes, semaphores, condition variables)",
      "Low-level concurrency: atomics, compare-and-swap, memory barriers",
      "Inter-process communication: pipes, message queues, shared memory, sockets",
      "I/O multiplexing with select, poll and epoll",
      "Memory management: virtual memory, paging, writing an allocator",
      "Processes: fork and exec, process lifecycle, scheduling",
      "C and C++ internals: compilation, linking, memory layout, struct alignment",
      "CPU caches and data locality",
      "Debugging with gdb and ptrace",
    ],
  },
  {
    group: "System Design",
    // Still learning the theory. Each item below is a decision made in a real project.
    items: [
      "Learning the theory; applied so far in my own projects",
      "Splitting a product into services (Node.js API + Python ML service)",
      "Typed contracts between a pipeline and its consumers",
      "Metadata-only servers, with data kept on clients",
      "Content-addressed storage and deduplication",
      "Parallel work with bounded concurrency",
      "Fallbacks when a component fails",
      "Memory and latency budgets on low-end devices",
      "Offline-first design",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "dermasense",
    title: "DermaSense",
    summary:
      "A skin-lesion analysis system that checks photo quality, finds and outlines lesions, and tracks how they change between visits, with a clear handoff to a clinician.",
    tech: ["PyTorch", "ResNet-50", "YOLO11", "U-Net", "OpenCV", "FastAPI", "SQLite", "RAG", "pytest"],
    year: 2026,
    cover: "/images/projects/dermasense.jpg",
    liveUrl: "",
    repoUrl: "https://github.com/pathakabhi-04/DERMASENSE",
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "temporal-rag",
    title: "TemporalRAG",
    summary:
      "Makes CCTV and dashcam footage searchable in natural language, returning grounded answers with exact timestamps and frame references.",
    tech: ["YOLOv8m", "ByteTrack", "LLaVA-7B", "ChromaDB", "BM25", "Groq", "FastAPI", "Streamlit", "RAGAS"],
    year: 2026,
    cover: "/images/projects/temporal-rag.jpg",
    liveUrl: "",
    // Repo is private right now (404 for visitors). Paste this back once public:
    // https://github.com/pathakabhi-04/Multimodal-Temporal-RAG
    repoUrl: "",
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "rag-document-qa",
    title: "RAG Document QA",
    summary:
      "Conversational question answering over multiple PDFs, with hybrid retrieval, a confidence gate, and citations to the source document and page.",
    tech: ["ChromaDB", "BM25", "Cross-encoder", "LangChain", "Ollama", "Streamlit", "RAGAS"],
    year: 2026,
    cover: "/images/projects/rag-document-qa.jpg",
    liveUrl: "",
    repoUrl: "", // no public repo
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "itantra",
    title: "iTantra",
    summary:
      "An offline Android app for ISRO's Smart India Hackathon problem that relays speech between phones with no internet. I built its translation, voice clips, photo sharing, roles and blood-request features.",
    tech: ["Kotlin", "Jetpack Compose", "ONNX Runtime", "IndicTrans2", "Wi-Fi Direct", "MediaCodec", "WebP"],
    year: 2026,
    liveUrl: "",
    repoUrl: "https://github.com/Naitik328/itantra",
    featured: false,
    hasCaseStudy: true,
  },
  {
    slug: "meshdrive",
    title: "MeshDrive",
    summary:
      "A peer-to-peer cloud drive. Files are split into hashed chunks and spread across the users' own machines, not a central server. Built as a team; I worked across the backend: chunking, the API, P2P networking and the design.",
    tech: ["Rust", "Tauri", "libp2p", "BLAKE3", "Tokio", "React", "REST API"],
    year: 2026,
    liveUrl: "",
    repoUrl: "https://github.com/Naitik328/meshdrive",
    featured: false,
    hasCaseStudy: true,
  },
  {
    slug: "stocklite",
    title: "Stocklite",
    summary:
      "An AI stock-analysis assistant that combines technical indicators, recent news and a LoRA-fine-tuned Llama model. I built its conversational layer: session memory, follow-up questions and intent routing.",
    tech: ["FastAPI", "Llama 3.2 1B", "LoRA (PEFT)", "yfinance", "NewsAPI", "Node.js", "React"],
    year: 2026,
    liveUrl: "",
    repoUrl: "https://github.com/shivanshu24-code/Stocklite",
    featured: false,
    hasCaseStudy: true,
  },
  {
    slug: "semantic-search",
    title: "Semantic Document Search",
    summary:
      "Semantic search over a custom document corpus using dense embeddings and FAISS, returning ranked results with similarity scores.",
    tech: ["sentence-transformers", "FAISS", "ChromaDB", "Streamlit"],
    year: 2026,
    liveUrl: "",
    repoUrl: "", // no public repo
    featured: false,
    hasCaseStudy: false,
  },
  {
    slug: "resume-analyzer-api",
    title: "AI Resume Analyzer API",
    summary:
      "A FastAPI service that takes a resume PDF and returns structured analysis of skill gaps, ATS score and improvement tips.",
    tech: ["FastAPI", "Pydantic", "LangGraph", "Ollama", "Render"],
    year: 2026,
    liveUrl: "",
    repoUrl: "", // no public repo
    featured: false,
    hasCaseStudy: false,
  },
  {
    slug: "adas",
    title: "ADAS Dashcam Safety",
    summary:
      "A driver-assistance pipeline for dashcam video that detects and tracks vehicles and pedestrians, computes time-to-collision, and combines them into a single risk score.",
    tech: ["Python", "Ultralytics YOLO", "Multi-object tracking", "OpenCV"],
    year: 2026,
    liveUrl: "",
    repoUrl: "https://github.com/pathakabhi-04/ADAS-",
    featured: false,
    hasCaseStudy: false,
  },
];

// No experience yet. Add entries here and the section appears automatically.
export const experience: Experience[] = [];

export const education: Education[] = [
  {
    school: "Bennett University",
    degree: "B.Tech, Computer Science Engineering",
    start: "2024",
    end: "2028",
    note: "",
  },
];

export const achievements: string[] = [
  "Smart India Hackathon (SIH) 2026: my team ranked 7th in the Bennett University internal round with iTantra, an offline speech relay for ISRO problem statement SIH26173.",
  "Unstop hackathon, Aug–Sep 2026: built TemporalRAG from idea submission to full product.",
];

/** Convenience selectors so components stay dumb. */
export const featuredProjects = () => projects.filter((p) => p.featured);
export const primarySocials = () => socials.filter((s) => s.primary && s.url);
export const visibleSkills = () => skills.filter((g) => g.items.length > 0);
