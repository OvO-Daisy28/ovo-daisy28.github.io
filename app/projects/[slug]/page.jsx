import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ImagePlus } from "lucide-react";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.short } : {};
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== slug);

  return (
    <>
      <section className={`detail-hero ${project.tone}`}>
        <div className="shell detail-hero-inner">
          <Link className="back-link" href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> 全部项目</Link>
          <div className="detail-category"><span>{project.category}</span>{project.status && <span className="project-status">{project.status}</span>}</div>
          <h1>{project.title}</h1>
          <p>{project.short}</p>
        </div>
      </section>
      <div className="shell detail-content">
        <section className="detail-section" aria-labelledby="goal-title">
          <h2 id="goal-title">{project.status ? "复现目标" : "要解决的问题"}</h2>
          <p>{project.goal}</p>
        </section>
        <section className="detail-section" aria-labelledby="flow-title">
          <h2 id="flow-title">{project.status ? "上游任务链路" : "系统设计"}</h2>
          <ol className="flow-steps">{project.flow.map(([title, detail]) => (
            <li key={title}><h3>{title}</h3><p>{detail}</p></li>
          ))}</ol>
        </section>
        <section className="detail-section" aria-labelledby="contribution-title">
          <h2 id="contribution-title">{project.status ? "我在做的工作" : "我负责的工作"}</h2>
          <ul className="contribution-list">{project.contributions.map(([title, detail]) => (
            <li key={title}><h3>{title}</h3><p>{detail}</p></li>
          ))}</ul>
        </section>
        <section className="detail-section case-section" aria-labelledby="case-title">
          <h2 id="case-title">{project.caseStudy.title}</h2>
          <p>{project.caseStudy.detail}</p>
        </section>
        <section className="detail-section evidence-section" aria-labelledby="evidence-title">
          <h2 id="evidence-title">{project.evidence.title}</h2>
          <p>{project.evidence.detail}</p>
          {project.evidence.image && (
            <figure className="evidence-image"><Image src={project.evidence.image} alt={project.evidence.alt} width={1440} height={1060} sizes="(max-width: 720px) 94vw, 910px" /></figure>
          )}
          {project.evidence.placeholder && (
            <div className="media-placeholder"><ImagePlus size={26} aria-hidden="true" /><span>{project.evidence.placeholder}</span><small>素材待补</small></div>
          )}
          {project.links.length > 0 && (
            <div className="detail-links flex flex-wrap">{project.links.map(({ href, label }, index) => (
              <a className={`button ${index === 0 ? "button-dark" : "button-neutral"}`} key={href} href={href}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>
            ))}</div>
          )}
        </section>
        <section className="detail-section project-facts" aria-label="状态与技术栈">
          <div><h2>项目状态</h2><p>{project.stateNote}</p></div>
          <div><h2>技术栈</h2><ul className="tag-list" aria-label="项目技术栈">{project.tech.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
        </section>
        <nav className="related-nav" aria-label="其他项目"><h2>继续查看</h2>{related.map(({ slug, title }) => (
          <Link key={slug} href={`/projects/${slug}/`}>{title}<ArrowRight size={17} aria-hidden="true" /></Link>
        ))}</nav>
      </div>
    </>
  );
}
