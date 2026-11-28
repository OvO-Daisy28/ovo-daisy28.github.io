import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ImagePlus } from "lucide-react";
import { projects, robotacAward } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.short } : {};
}

function ProjectFigure({ src, width, height, alt, caption }) {
  return (
    <figure className="evidence-image project-figure">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 94vw, 870px" />
      <figcaption>
        <span>{caption}</span>
        <a href={src} aria-label={`查看原图：${caption}`}>查看原图 <ArrowUpRight size={14} aria-hidden="true" /></a>
      </figcaption>
    </figure>
  );
}

function CompetitionStory({ project }) {
  const { event, frames, role, year } = project.competition;
  return (
    <>
      <section className="detail-section" aria-labelledby="competition-title">
        <h2 id="competition-title">赛项与结果</h2>
        <dl className="competition-facts">
          <div><dt>赛项</dt><dd>{year} · {event}</dd></div>
          <div><dt>参赛角色</dt><dd>{role} · 西南交通大学</dd></div>
          <div><dt>获奖</dt><dd>{robotacAward.title}</dd></div>
        </dl>
        <p className="competition-source"><a href={robotacAward.source}>查阅 ROBOTAC 官方国赛公示 <ArrowUpRight size={15} aria-hidden="true" /></a></p>
      </section>
      <section className="detail-section" aria-labelledby="demo-title">
        <h2 id="demo-title">空地协作演示</h2>
        <p>{project.goal}</p>
        <div className="competition-gallery">
          {frames.map(([id, title, caption]) => (
            <figure key={id}>
              <a href={`/media/robotac/${id}.webp`} aria-label={`查看关键帧：${title}`}>
                <Image src={`/media/robotac/${id}.webp`} alt={caption} width={848} height={498} sizes="(max-width: 600px) 94vw, 420px" />
              </a>
              <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
            </figure>
          ))}
        </div>
        <p>画面截自预选赛提交视频。地面和空中赛段取自两次独立录制，均使用同一套空地接续仿真流程。</p>
      </section>
      <section className="detail-section" aria-labelledby="competition-tech-title">
        <h2 id="competition-tech-title">团队技术亮点</h2>
        <ul className="contribution-list">{project.contributions.map(([title, detail]) => (
          <li key={title}><h3>{title}</h3><p>{detail}</p></li>
        ))}</ul>
      </section>
    </>
  );
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
        {project.competition ? <CompetitionStory project={project} /> : <>
        <section className="detail-section" aria-labelledby="goal-title">
          <h2 id="goal-title">{project.status ? "复现目标" : "要解决的问题"}</h2>
          <p>{project.goal}</p>
        </section>
        <section className="detail-section" aria-labelledby="flow-title">
          <h2 id="flow-title">{project.status ? "上游任务链路" : "系统设计"}</h2>
          {project.architecture ? project.architecture.map(({ title, detail, figure }) => (
            <div className="architecture-block" key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
              <ProjectFigure {...figure} />
            </div>
          )) : (
            <ol className="flow-steps">{project.flow.map(([title, detail]) => (
              <li key={title}><h3>{title}</h3><p>{detail}</p></li>
            ))}</ol>
          )}
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
          {project.caseStudy.figure && <ProjectFigure {...project.caseStudy.figure} />}
        </section>
        <section className="detail-section evidence-section" aria-labelledby="evidence-title">
          <h2 id="evidence-title">{project.evidence.title}</h2>
          <p>{project.evidence.detail}</p>
          {project.evidence.figure && <ProjectFigure {...project.evidence.figure} />}
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
        </>}
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
