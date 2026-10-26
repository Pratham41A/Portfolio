import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaArrowsLeftRight,
  FaArrowsRotate,
  FaChartLine,
  FaBolt,
  FaCloud,
  FaClipboardCheck,
  FaClock,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaFilm,
  FaGraduationCap,
  FaGaugeHigh,
  FaGithub,
  FaGlobe,
  FaLink,
  FaLinkedinIn,
  FaLayerGroup,
  FaListCheck,
  FaMagnifyingGlass,
  FaMagnifyingGlassChart,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRobot,
  FaShieldHalved,
  FaSitemap,
  FaVectorSquare,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import {
  SiAnthropic,
  SiApachekafka,
  SiApachespark,
  SiBackblaze,
  SiDocker,
  SiExpress,
  SiFfmpeg,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiMake,
  SiNestjs,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQdrant,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSqlalchemy,
  SiCrewai,
  SiPnpm,
  SiSocket,
  SiTypescript,
  SiUv,
  SiVllm,
  SiWebrtc,
} from "react-icons/si";

const technologyIcons = {
  python: [SiPython, "#3776AB"],
  typescript: [SiTypescript, "#3178C6"],
  javascript: [SiJavascript, "#D6AE18"],
  nodejs: [SiNodedotjs, "#5FA04E"],
  fastapi: [SiFastapi, "#009688"],
  nestjs: [SiNestjs, "#E0234E"],
  expressjs: [SiExpress, "#444444"],
  rest: [FaArrowsLeftRight, "#496B58"],
  restapis: [FaArrowsLeftRight, "#496B58"],
  restapidesign: [FaArrowsLeftRight, "#496B58"],
  grpc: [FaNetworkWired, "#244FCE"],
  graphql: [SiGraphql, "#E10098"],
  websockets: [FaNetworkWired, "#3B82F6"],
  kafka: [SiApachekafka, "#231F20"],
  apachekafka: [SiApachekafka, "#231F20"],
  socketio: [SiSocketdotio, "#222222"],
  bullmq: [FaListCheck, "#D14B4B"],
  langgraph: [SiLanggraph, "#1C3C3C"],
  langchain: [SiLangchain, "#1C3C3C"],
  llamaindex: [FaSitemap, "#7057C8"],
  crewai: [SiCrewai, "#7B61FF"],
  litellm: [FaLayerGroup, "#5D6B8A"],
  modelcontextprotocolmcp: [FaNetworkWired, "#7357D8"],
  anthropicapi: [SiAnthropic, "#C8784A"],
  openaiapi: [FaWandMagicSparkles, "#412991"],
  googlegenai: [SiGooglegemini, "#4285F4"],
  langfuse: [FaChartLine, "#E25A1C"],
  langsmith: [FaMagnifyingGlassChart, "#3178C6"],
  ragas: [FaClipboardCheck, "#5B8A72"],
  deepeval: [FaGaugeHigh, "#6A5ACD"],
  ollama: [SiOllama, "#222222"],
  vllm: [SiVllm, "#4B63D3"],
  postgresql: [SiPostgresql, "#4169E1"],
  qdrant: [SiQdrant, "#DC244C"],
  mongodb: [SiMongodb, "#47A248"],
  redis: [SiRedis, "#D82C20"],
  mysql: [SiMysql, "#4479A1"],
  prismaorm: [SiPrisma, "#2D3748"],
  pgvector: [FaVectorSquare, "#4169E1"],
  sqlalchemy: [SiSqlalchemy, "#C74634"],
  mongoose: [FaLayerGroup, "#880000"],
  n8n: [SiN8N, "#EA4B71"],
  make: [SiMake, "#6D4AFF"],
  microsoftpowerautomate: [FaBolt, "#2563EB"],
  playwright: [FaGlobe, "#2EAD33"],
  crawl4ai: [FaMagnifyingGlass, "#5B8A72"],
  ffmpeg: [SiFfmpeg, "#007808"],
  hls: [FaFilm, "#B42318"],
  rtmp: [FaNetworkWired, "#CC5A36"],
  webrtc: [SiWebrtc, "#333333"],
  docker: [SiDocker, "#2496ED"],
  kubernetes: [SiKubernetes, "#326CE5"],
  aws: [FaCloud, "#FF9900"],
  awsec2ecslambdas3: [FaCloud, "#FF9900"],
  gcp: [SiGooglecloud, "#4285F4"],
  git: [SiGit, "#F05032"],
  githubactions: [SiGithubactions, "#2088FF"],
  react: [SiReact, "#61DAFB"],
  elkstackelasticsearchlogstashkibana: [FaLayerGroup, "#00A9E5"],
  pnpm: [SiPnpm, "#F69220"],
  uv: [SiUv, "#DE5FE9"],
  backblazeb2: [SiBackblaze, "#E21E29"],
  atomicoperations: [FaArrowsRotate, "#496B58"],
  ttlbasedexpiration: [FaClock, "#496B58"],
  rbac: [FaShieldHalved, "#496B58"],
  adaptivebitratestreamingabr: [FaGaugeHigh, "#CC5A36"],
  apachespark: [SiApachespark, "#E25A1C"],
  github: [FaGithub, "#181717"],
  linkedin: [FaLinkedinIn, "#0A66C2"],
  default: [FaPuzzlePiece, "#526E5C"],
};

const socialIcons = {
  github: [FaGithub, "#181717"],
  linkedin: [FaLinkedinIn, "#0A66C2"],
};

const categoryIcons = {
  backendengineeringdistributedsystems: [FaNetworkWired, "#526E5C"],
  artificialintelligencegenerativeai: [FaRobot, "#7B61FF"],
  databases: [FaDatabase, "#4169E1"],
  automationandintegration: [FaBolt, "#D98721"],
  clouddevopstools: [FaCloud, "#2496ED"],
  mediastreaming: [FaFilm, "#CC5A36"],
};

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

export function TechnologyIcon({ label, className = "technology-icon" }) {
  const normalizedLabel = normalize(label);
  const iconEntry = Object.hasOwn(technologyIcons, normalizedLabel)
    ? technologyIcons[normalizedLabel]
    : technologyIcons.default;
  const [Icon, color] = iconEntry;
  return <Icon aria-hidden="true" className={className} style={{ color }} />;
}

export function ArrowIcon({ diagonal = false, className = "size-[14px] shrink-0" }) {
  const Icon = diagonal ? FaArrowUpRightFromSquare : FaArrowRight;
  return <Icon aria-hidden="true" className={className} />;
}

export function ProjectLinkIcon({ source = false, className = "size-[15px] shrink-0" }) {
  const Icon = source ? FaGithub : FaArrowUpRightFromSquare;
  return <Icon aria-hidden="true" className={className} style={source ? { color: "#181717" } : undefined} />;
}

export function SocialIcon({ label, className = "size-[17px] shrink-0" }) {
  const normalizedLabel = normalize(label);
  const [Icon, color] = Object.hasOwn(socialIcons, normalizedLabel)
    ? socialIcons[normalizedLabel]
    : [FaLink, "#526E5C"];
  return <Icon aria-hidden="true" className={className} style={{ color }} />;
}

export function CategoryIcon({ category, className = "category-icon" }) {
  const iconEntry = categoryIcons[normalize(category)];
  const [Icon, color] = iconEntry || [FaCode, "#526E5C"];
  return <Icon aria-hidden="true" className={className} style={{ color }} />;
}

export function EducationIcon({ className = "education-icon" }) {
  return <FaGraduationCap aria-hidden="true" className={className} style={{ color: "#7F4730" }} />;
}

export function ContactIcon({ className = "contact-icon" }) {
  return <FaEnvelope aria-hidden="true" className={className} style={{ color: "#7F4730" }} />;
}
