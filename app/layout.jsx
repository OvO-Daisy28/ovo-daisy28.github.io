import Link from "next/link";
import { ArrowUpRight, GitFork } from "lucide-react";
import { github } from "../lib/projects";
import "./globals.css";

export const metadata = {
  title: { default: "卞颖慧｜求职作品集", template: "%s · 卞颖慧" },
  description: "西南交通大学控制工程硕士在读，2028 届。无人机控制软件、企业 RAG 与 Agent 项目。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">跳到主要内容</a>
        <header className="site-header">
          <nav className="shell header-inner" aria-label="主导航">
            <Link className="wordmark" href="/">卞颖慧<span> / 作品集</span></Link>
            <div className="nav-links">
              <Link href="/#projects">项目</Link>
              <Link href="/#experience">经历</Link>
              <Link href="/#contact">简历</Link>
            </div>
            <a className="header-github" href={github} aria-label="卞颖慧的 GitHub 主页"><GitFork size={17} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>卞颖慧 · 2028 届控制工程硕士</span>
            <a href={github}>GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </footer>
      </body>
    </html>
  );
}
