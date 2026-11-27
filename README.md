# 卞颖慧的求职作品集

Next.js 和 Tailwind CSS 实现的静态作品集，包含首页和四个可单独分享的项目页面。

```powershell
npm.cmd install
npm.cmd run dev
```

在终端输出的 Local 地址浏览。运行 `npm.cmd run build` 生成静态文件，输出目录为 `out`。

- `lib/projects.js` 管理项目简介、个人职责、流程、证据和外链。
- `app/page.jsx` 管理首页、经历和简历申请入口。
- `app/projects/[slug]/page.jsx` 是通用项目页。
- `public/media/` 存放可公开使用的展示素材。当前 Signal 截图来自个人开源仓库。
- 无人机和 SkyPilot 详情页预留了截图位。获得可公开素材后，在相应项目的 `evidence` 中设定 `image` 和 `alt`，移除 `placeholder`。
- 更新简历入口前，先确认公开文件与联系方式。当前入口引导招聘访客通过原沟通渠道索取简历。
