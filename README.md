# 卞颖慧的个人网站

Next.js 与 Tailwind CSS 实现的静态个人网站，包含首页、三个精选项目详情和一个进行中的开源复现页。

```powershell
npm.cmd ci
npm.cmd run dev
```

在终端输出的 Local 地址浏览。运行 `npm.cmd run build` 生成静态文件，输出目录为 `out`。

- `app/page.jsx` 管理首页介绍、精选项目、经历与技能。
- `lib/projects.js` 管理项目问题、系统设计、个人贡献、结果与技术栈。
- `app/projects/[slug]/page.jsx` 是通用项目详情页。
- `public/media/` 存放白底证件照的网页尺寸副本和 Signal 开源项目的展示截图。
- GitHub Actions 中的 Deploy portfolio to GitHub Pages 工作流构建并发布静态文件。
