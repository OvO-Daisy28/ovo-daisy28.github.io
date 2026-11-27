export const github = "https://github.com/OvO-Daisy28";
const signal = github + "/marketing-analysis-agent";
const skyPilot = "https://github.com/antoinehinary/skypilot-agent";

export const projects = [
  {
    slug: "uav-sitl",
    tone: "flight",
    category: "横向科研项目",
    title: "无人机控制软件与软件在环验证",
    short: "适配 Linux／ROS 上层控制接口，运行 PX4＋Gazebo 仿真，用日志和状态反馈核对试验结果。",
    goal: "在仿真中验证上层控制接口和接到指令后的响应，为后续联调提供试验依据。",
    role: "我负责全部试验大纲和报告，参与上层控制代码与 ROS 接口适配、软件在环试验和结果分析。",
    tech: ["Linux", "ROS", "PX4", "Gazebo", "C++"],
    flow: [
      ["目标指令", "测试程序提供位置等目标"],
      ["ROS 控制节点", "接收并适配控制指令"],
      ["PX4 / Gazebo", "计算控制输出并模拟运动"],
      ["状态与日志", "记录响应并核对判据"],
    ],
    caseStudy: {
      title: "一次位置控制试验",
      detail: "先把试验要求拆成目标、记录项和通过判据。仿真中检查指令有没有送到、状态有没有持续反馈。分析时按时间对齐目标和反馈，避免用目标切换后的值去比较切换前的采样。",
    },
    evidence: {
      title: "位置响应与试验结果",
      detail: "试验步骤、判据、执行过程和结果分析整理为大纲与报告。此处预留可公开的位置响应曲线和仿真截图。",
      placeholder: "位置响应曲线与仿真截图",
    },
    links: [],
  },
  {
    slug: "wenge-rag",
    tone: "rag",
    category: "企业实习",
    title: "中科闻歌｜企业 RAG 应用",
    short: "从 POC 到部署验证，完成平台和模型部署、文档导入、接口开发与问答测试。",
    goal: "将工程文档处理和问答需求转化为可展示的流程，并验证实际 RAG 平台的部署与集成。",
    role: "我完成 POC、平台和模型部署、万份量级的文档导入、接口开发验证、图谱功能验证及问答时效优化。",
    tech: ["RAGFlow", "FastAPI", "MinerU", "Elasticsearch", "vLLM", "BGE-M3"],
    flow: [
      ["文档与导入", "解析原文并入库"],
      ["检索和图谱", "查询知识并定位来源"],
      ["模型服务", "接入并验证问答"],
      ["接口验证", "核对请求、返回和耗时"],
    ],
    caseStudy: {
      title: "从原型演示到实际平台验证",
      detail: "在 POC 中把文档解析、原文对照审核、检索和手册生成做成可点击的流程。进入部署阶段后，验证模型服务、文档导入、图谱与问答接口，并针对问答耗时进行优化。",
    },
    evidence: {
      title: "离线 POC 演示",
      detail: "下载 ZIP 后解压，打开其中的 HTML 体验解析、审核、检索和手册生成。离线版使用预置结果，页面中的演示指标仅用于说明流程。",
    },
    links: [{ label: "下载离线演示 ZIP", href: github + "/OvO-Daisy28/raw/refs/heads/main/demos/industrial-document-poc.zip" }],
  },
  {
    slug: "marketing-agent",
    tone: "signal",
    category: "个人开源项目",
    title: "Signal｜营销分析 Agent",
    short: "把数据分析任务变成可核查的报告。支持工具调用、证据追溯、报告修改与人工确认。",
    goal: "用公开电商数据演示从分析问题到报告交付的完整流程，让用户可以核对结论所引用的指标。",
    role: "我实现了受控报表 Skill、自建 ReAct 工具调用循环、证据记录和后台任务恢复，并提供在线示例。",
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "Function Calling"],
    flow: [
      ["用户提出问题", "例如不同访客类型的转化差异"],
      ["Agent 调用工具", "按条件查询并检查假设"],
      ["记录可查询证据", "保存计算范围、分子和分母"],
      ["生成报告", "预览、修改并由用户确认发布"],
    ],
    caseStudy: {
      title: "怎样核对一条分析结论",
      detail: "在在线案例中继续检查访客结构，可以切到「结论与依据」查看分组数据和样本量。程序计算指标，模型据此组织结论，用户检查后再确认发布。",
    },
    evidence: {
      title: "工作台与证据",
      detail: "在线版提供可直接体验的固定案例。独立数值核对中，181 个聚合结果与 CSV 重算一致，指标口径、验证范围与其余限制见项目验证记录。",
      image: "/media/signal-workbench.png",
      alt: "Signal 工作台展示分析步骤、报告和结论证据",
    },
    links: [
      { label: "打开在线案例", href: "https://ovo-daisy28.github.io/marketing-analysis-agent/" },
      { label: "查看源码", href: signal },
      { label: "查看验证记录", href: signal + "/blob/main/docs/validation.md" },
    ],
  },
  {
    slug: "skypilot",
    tone: "pilot",
    category: "开源复现",
    status: "进行中",
    title: "SkyPilot｜无人机 Agent 复现",
    short: "在 Ubuntu 上复现自然语言任务、MCP 工具调用和仿真反馈，并用仿真状态验收。",
    goal: "复现 Agent 在仿真运行中调用工具、读取反馈并选择下一步的过程。",
    role: "我正在复现上游开源项目，学习 MCP 工具接口、任务反馈与仿真验收。上游实现见项目仓库。",
    tech: ["Ubuntu", "MCP", "PyBullet", "Ollama"],
    flow: [
      ["自然语言任务", "给出一个基础仿真目标"],
      ["MCP 工具", "模型请求功能并接收结果"],
      ["PyBullet 仿真", "运行上游提供的无人机模型"],
      ["状态验收", "根据仿真输出判断任务完成"],
    ],
    caseStudy: {
      title: "复现计划",
      detail: "先验证无图形界面的基础仿真测试，再接入本地模型完成一次任务。准备记录模型选用的工具、返回的状态及最后的验收结果。",
    },
    evidence: {
      title: "复现实验记录",
      detail: "预留仿真截图和工具调用记录位置。完成实测后补充 Ubuntu 环境版本、命令、实际输出和个人改动。",
      placeholder: "仿真画面与工具调用记录",
    },
    links: [{ label: "查看上游项目", href: skyPilot }],
  },
];
