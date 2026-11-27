export const github = "https://github.com/OvO-Daisy28";
const signal = github + "/marketing-analysis-agent";
const skyPilot = "https://github.com/antoinehinary/skypilot-agent";

export const projects = [
  {
    slug: "uav-sitl",
    tone: "flight",
    category: "横向科研项目",
    title: "无人机控制软件与软件在环验证",
    short: "让上层控制指令接入 PX4＋Gazebo，并用状态反馈与日志检验执行效果。",
    goal: "验证上层程序能否通过 ROS 接口发出控制指令，并在仿真环境中收到可用于核对试验结果的状态反馈。",
    contributions: [
      ["把试验要求变成可执行步骤", "负责试验大纲和报告，将测试目标落实为指令、记录项和判定方法。"],
      ["适配软件接口", "参与 Linux 上层控制代码和 ROS 接口适配，在 PX4＋Gazebo 中运行软件在环试验。"],
      ["检查指令和反馈", "阅读执行日志，将目标与反馈按时间对齐，核对试验过程和结果。"],
    ],
    tech: ["Linux", "ROS", "PX4", "Gazebo", "C++"],
    flow: [
      ["目标指令", "测试程序提供位置等目标"],
      ["ROS 控制节点", "接收并适配控制指令"],
      ["PX4 / Gazebo", "计算控制输出并模拟运动"],
      ["状态与日志", "记录响应并核对判据"],
    ],
    caseStudy: {
      title: "一次位置控制试验",
      detail: "先下发目标位置并记录指令与状态。判断位置信号时，每条反馈与它采样时有效的目标比较。目标发生切换时，仍按原时间戳配对，以免把对齐误差计为控制误差。",
    },
    evidence: {
      title: "结果与验证",
      detail: "通过仿真检查指令下发、状态反馈和位置响应，将试验方法与结果整理为大纲和报告。",
      placeholder: "位置响应曲线与仿真截图",
    },
    stateNote: "完成软件在环试验及结果整理。",
    links: [],
  },
  {
    slug: "wenge-rag",
    tone: "rag",
    category: "企业实习",
    title: "中科闻歌｜企业 RAG 应用",
    short: "让分散的工程文档可以检索和问答，完成原型、模型部署与批量入库验证。",
    goal: "将采购文件和设备资料接入可检索的系统，支持查找原文与文档问答，并用 POC 展示审核和手册生成流程。",
    contributions: [
      ["完成 POC 与系统部署", "把文档解析、对照审核、检索和手册生成做成可体验的原型，随后部署 RAG 平台与模型服务。"],
      ["开发批量导入与查询接口", "用 FastAPI 接入导入流程，记录文档状态和各阶段耗时，便于定位失败任务。"],
      ["验证问答及图谱", "按实际用例核对接口返回和图谱功能，针对问答响应时效做优化。"],
    ],
    tech: ["RAGFlow", "FastAPI", "MinerU", "Elasticsearch", "vLLM", "BGE-M3"],
    flow: [
      ["文档解析", "识别文档内容并切分"],
      ["向量化与索引", "将文档写入检索库"],
      ["检索与图谱", "找到相关内容与关系"],
      ["问答接口", "生成回答并核对返回结果"],
    ],
    caseStudy: {
      title: "一次批量入库排查",
      detail: "先记录解析、Embedding 和索引等阶段的耗时，再在不同并发条件下检查吞吐量。阶段记录帮助定位 Embedding 瓶颈，后续完成 GPU 服务部署与对比验证。",
    },
    evidence: {
      title: "结果与体验",
      detail: "完成万份量级的文档导入测试，以及问答接口和图谱功能验证。公开的离线 POC 使用预置结果，下载 ZIP 并解压后，用浏览器打开 industrial-document-poc.html。",
    },
    stateNote: "实习项目，已提供可离线体验的 POC。",
    links: [{ label: "下载离线演示 ZIP", href: github + "/OvO-Daisy28/raw/refs/heads/main/demos/industrial-document-poc.zip" }],
  },
  {
    slug: "marketing-agent",
    tone: "signal",
    category: "个人开源项目",
    title: "Signal｜营销分析 Agent",
    short: "把电商分析问题变成可核对证据、可修改和人工确认的报告。",
    goal: "让用户用自然语言提出电商数据问题，获得一份可以回查指标来源和计算口径的报告。",
    contributions: [
      ["用程序计算指标", "实现报表 Skill，固定指标口径和模板，让查询与聚合可复算。"],
      ["把证据留在分析流程里", "实现 ReAct 工具调用循环，记录目标、假设、样本量和工具结果。"],
      ["交付可修改的报告", "实现后台任务状态与恢复，支持用户预览、修改和确认发布。"],
    ],
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
    stateNote: "个人开源项目，在线提供固定案例。",
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
    short: "在 Ubuntu 上学习如何将自然语言任务接到仿真工具。",
    goal: "复现上游 Agent 在仿真运行中调用工具、读取反馈并选择下一步的过程。",
    contributions: [
      ["复现目标", "先跑基础仿真，再接本地模型执行一个仿真任务，记录工具请求、返回结果和验收状态。"],
    ],
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
      title: "复现记录",
      detail: "目前在复现阶段。实测后会记录 Ubuntu 环境、命令、工具调用和最终状态。",
      placeholder: "仿真画面与工具调用记录",
    },
    stateNote: "进行中的开源复现，项目实现见上游仓库。",
    links: [{ label: "查看上游项目", href: skyPilot }],
  },
];
