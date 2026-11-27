import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Cpu, GitFork, Radio, Terminal, Workflow } from "lucide-react";
import { github, projects } from "../lib/projects";

const icons = { flight: Radio, rag: BookOpen, signal: Workflow, pilot: Terminal };

function FlightOverview() {
  return (
    <figure className="flight-overview">
      <figcaption className="flight-caption"><Radio size={16} aria-hidden="true" /> 无人机软件在环 <span>链路示意</span></figcaption>
      <div className="flight-grid">
        <div className="flight-node"><Terminal size={18} aria-hidden="true" /><div><strong>目标指令</strong><small>测试程序</small></div></div>
        <span className="flight-edge" aria-hidden="true">→</span>
        <div className="flight-node"><Workflow size={18} aria-hidden="true" /><div><strong>ROS</strong><small>上层控制节点</small></div></div>
        <div className="flight-feedback"><span></span>状态反馈与日志<span></span></div>
        <div className="flight-node"><Cpu size={18} aria-hidden="true" /><div><strong>PX4</strong><small>控制输出</small></div></div>
        <span className="flight-edge" aria-hidden="true">→</span>
        <div className="flight-node"><Radio size={18} aria-hidden="true" /><div><strong>Gazebo</strong><small>运动仿真</small></div></div>
      </div>
    </figure>
  );
}

function ProjectCard({ project }) {
  const Icon = icons[project.tone];
  return (
    <article className={`project-card ${project.tone}`}>
      <div className="card-category">
        <span className="category-icon"><Icon size={19} aria-hidden="true" /></span>
        <span>{project.category}</span>
        {project.status && <span className="project-status">{project.status}</span>}
      </div>
      <h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3>
      <p>{project.short}</p>
      {project.tone === "signal" && (
        <Link className="card-image" href="/projects/marketing-agent/" aria-label="查看 Signal 工作台与项目详情">
          <Image src={project.evidence.image} alt={project.evidence.alt} width={1440} height={1060} sizes="(max-width: 720px) 94vw, 540px" />
        </Link>
      )}
      <div className="card-footer">
        <ul className="tag-list" aria-label="项目技术栈">{project.tech.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <Link className="card-arrow" href={`/projects/${project.slug}/`} aria-label={`查看${project.title}详情`}><ArrowUpRight size={19} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section aria-labelledby="intro" className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="hero-meta"><span></span> 西南交通大学 <span className="hero-divider"></span> 2028 届</p>
            <h1 id="intro">无人机软件<br />与 <em>AI 应用</em></h1>
            <p className="hero-description">我是卞颖慧，控制工程硕士在读。做过 ROS／PX4 软件在环验证，以及企业 RAG 的原型开发、模型部署和接口测试。</p>
            <div className="hero-actions flex flex-wrap">
              <Link className="button button-light" href="#projects">查看项目 <ArrowDown size={17} aria-hidden="true" /></Link>
              <Link className="button button-outline" href="#contact">申请简历 <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <FlightOverview />
        </div>
      </section>

      <section className="shell projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-header">
          <h2 id="projects-title">精选项目</h2>
        </div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="shell experience-inner">
          <h2 id="experience-title">经历与教育</h2>
          <div className="experience-list">
            <article><BriefcaseBusiness size={22} aria-hidden="true" /><div><h3>中科闻歌</h3><p>从 POC、RAG 平台与模型部署到接口验证。</p></div><Link href="/projects/wenge-rag/" aria-label="查看中科闻歌实习项目"><ArrowRight size={19} aria-hidden="true" /></Link></article>
            <article><BookOpen size={22} aria-hidden="true" /><div><h3>西南交通大学</h3><p>控制工程硕士在读 · 2028 届 · 四旋翼吊运控制</p></div></article>
          </div>
        </div>
      </section>

      <section className="shell contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-card">
          <div><h2 id="contact-title">联系与简历</h2><p>欢迎交流机器人软件与 AI 应用的实习或校招机会。可通过原招聘沟通渠道联系我，索取对应岗位的简历。</p></div>
          <a className="button button-dark" href={github}><GitFork size={17} aria-hidden="true" /> 查看 GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
    </>
  );
}
