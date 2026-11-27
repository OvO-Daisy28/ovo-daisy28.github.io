import Link from "next/link";
import { ArrowUpRight, GitFork } from "lucide-react";
import { github } from "../lib/projects";
import "./globals.css";

export const metadata = {
  title: { default: "卞颖慧｜机器人软件与 AI 应用", template: "%s · 卞颖慧" },
  description: "西南交通大学控制工程硕士在读。研究四旋翼双摆吊运控制，记录机器人软件、RAG 和 Agent 项目实践。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">跳到主要内容</a>
        <header className="site-header">
          <nav className="shell header-inner" aria-label="主导航">
            <Link className="wordmark" href="/">卞颖慧</Link>
            <div className="nav-links">
              <Link href="/#about">关于我</Link>
              <Link href="/#projects">项目</Link>
              <Link href="/#experience">经历</Link>
              <Link href="/#skills">技能</Link>
            </div>
            <a className="header-github" href={github} aria-label="卞颖慧的 GitHub 主页"><GitFork size={17} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>卞颖慧 · 西南交通大学</span>
            <a href={github}>GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </footer>
      </body>
    </html>
  );
}
