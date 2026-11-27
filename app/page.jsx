import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Braces, Cpu, GitFork, Terminal } from "lucide-react";
import { github, projects } from "../lib/projects";

const featured = ["uav-sitl", "marketing-agent", "wenge-rag"].map((slug) =>
  projects.find((project) => project.slug === slug),
);
const reproduction = projects.find((project) => project.slug === "skypilot");

const skills = [
  { title: "机器人软件与仿真", description: "上层控制接口适配、软件在环与动力学仿真", items: ["Linux", "C++", "ROS", "PX4", "Gazebo", "MuJoCo", "Simulink"] },
  { title: "Agent 开发", description: "工具调用、证据记录、结果核对和报告交付", items: ["Function Calling", "ReAct", "PostgreSQL"] },
  { title: "RAG 与模型部署", description: "批量文档导入、模型服务接入、检索和问答验证", items: ["Python", "FastAPI", "Docker", "RAGFlow", "Elasticsearch", "vLLM", "BGE-M3"] },
];

function ProjectPreview({ project }) {
  if (project.evidence.image) {
    return (
      <div className="project-preview screenshot">
        <Image src={project.evidence.image} alt={project.evidence.alt} width={1440} height={1060} sizes="(max-width: 700px) 94vw, 340px" />
      </div>
    );
  }

  const steps = project.tone === "flight"
    ? ["ROS", "PX4", "Gazebo"]
    : ["文档导入", "检索", "问答"];
  return (
    <div className="project-preview diagram" aria-label={"系统流程：" + steps.join("、")}>
      {steps.map((step, index) => (
        <span className="preview-part" key={step}>
          {index > 0 && <ArrowRight size={14} aria-hidden="true" />}
          <span className="preview-step">{step}</span>
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const href = "/projects/" + project.slug + "/";
  return (
    <article className={"project-card " + project.tone}>
      <ProjectPreview project={project} />
      <div className="project-card-body">
        <p className="card-category">{project.category}</p>
        <h3><Link href={href} className="card-title-link">{project.title}</Link></h3>
        <p className="card-summary">{project.short}</p>
        <ul className="tag-list" aria-label="项目技术栈">{project.tech.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <Link className="project-link" href={href}>查看案例 <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only">：{project.title}</span></Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">西南交通大学 · 控制工程硕士在读 · 2028 届</p>
            <h1 id="intro">你好，我是<span className="hero-name">卞颖慧</span></h1>
            <p className="hero-focus">机器人软件开发与机器人 Agent</p>
            <p className="hero-description">我的硕士课题是四旋翼无人机双摆吊运控制。我做过 ROS／PX4 软件在环试验，也独立开发过数据分析 Agent。目前，我在复现开源无人机 Agent，探索怎样让模型调用仿真工具并读取任务反馈。</p>
            <div className="hero-actions flex flex-wrap">
              <Link className="button button-gold" href="#projects">查看项目 <ArrowDown size={16} aria-hidden="true" /></Link>
              <a className="button button-neutral" href={github}><GitFork size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="portrait-frame">
            <Image src="/media/yinghui-portrait.webp" alt="卞颖慧的白底证件照" width={720} height={720} preload sizes="(max-width: 700px) 155px, 260px" />
          </div>
        </div>
      </section>

      <section className="shell content-section about-section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">关于我</h2>
        <div className="about-copy">
          <p><strong>机器人软件开发</strong>方面，我参与过无人机上层控制代码修改和 ROS 接口适配。在 PX4 与 Gazebo 的软件在环试验中，我对照指令、状态反馈和日志，检查控制接口是否按预期工作。</p>
          <p><strong>机器人 Agent</strong>是我在硕士课题之外主动探索的方向。我在个人项目 Signal 中实现了工具调用和证据记录，并用原始数据复算报告指标。现在我在复现 SkyPilot，学习怎样把自然语言任务接入机器人仿真，并根据仿真反馈判断任务是否完成。</p>
        </div>
      </section>

      <section className="shell content-section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">精选项目</h2>
        <div className="project-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        <div className="current-project">
          <Terminal size={22} aria-hidden="true" />
          <div>
            <p className="card-category">正在做 · 开源复现</p>
            <h3>SkyPilot 无人机 Agent</h3>
            <p>在 Ubuntu 上复现自然语言任务、MCP 工具调用和仿真反馈，学习如何根据仿真状态判断任务是否完成。</p>
          </div>
          <Link className="project-link" href={"/projects/" + reproduction.slug + "/"}>查看进展 <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="shell content-section experience-inner">
          <h2 id="experience-title">经历与教育</h2>
          <div className="experience-list">
            <article>
              <Braces size={20} aria-hidden="true" />
              <div><h3>中科闻歌 · 企业 RAG 实习</h3><p>完成文档处理 POC，部署平台和模型服务，并做批量入库、问答接口和图谱验证。</p></div>
              <Link href="/projects/wenge-rag/" aria-label="查看中科闻歌项目"><ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
            <article>
              <BookOpen size={20} aria-hidden="true" />
              <div><h3>西南交通大学 · 控制工程硕士</h3><p>2028 届 · 四旋翼无人机双摆吊运控制</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="shell content-section skills-section" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">技术技能</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.title}>
              <span className="skill-icon"><Cpu size={17} aria-hidden="true" /></span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <ul className="tag-list" aria-label={skill.title}>{skill.items.map((name) => <li key={name}>{name}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
