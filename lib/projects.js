export const github = "https://github.com/OvO-Daisy28";
export const robotacAward = {
  title: "全国总决赛一等奖",
  team: "西南交通大学 · 从容应队",
  source: "https://www.robotac.cn/sys-nd/1408.html",
  screenshot: "/media/robotac/official-award.png",
};
const signal = github + "/marketing-analysis-agent";
const skyPilot = "https://github.com/antoinehinary/skypilot-agent";

export const projects = [
  {
    slug: "uav-sitl",
    tone: "flight",
    category: "横向科研项目",
    title: "无人机控制软件与软件在环验证",
    short: "基于 Sunray 适配 Linux／ROS 控制接口，用 PX4 和 Gazebo 验证位置指令下发与状态反馈。",
    goal: "上层任务程序发出控制目标后，需要确认目标能传到飞控、无人机按指令响应、试验程序能收到状态。项目按试验要求适配 Sunray 的上层软件和接口，先在软件在环环境中检验这条链路。",
    architecture: [
      {
        title: "真机系统架构与部署",
        detail: "RK3588 运行 Ubuntu、ROS 1 和上层任务程序，STM32H743 飞控主控板运行 PX4，负责状态估计与飞行控制。两侧通过 MAVROS 和 MAVLink 交换控制设定值与飞控状态。地面工具用于下发操作指令、监视状态和调试。",
        figure: {
          src: "/media/uav-sitl/jky-system-architecture-full.png", width: 3240, height: 1989,
          alt: "真机架构图，展示地面站、RK3588 机载计算侧、STM32H743 飞控主控板及其通信路径",
          caption: "真机软硬件分工与通信路径",
        },
      },
      {
        title: "软件在环架构",
        detail: "在同一台 Ubuntu 测试电脑上运行 ROS 上层程序、PX4 SITL 和 Gazebo。上层程序通过 MAVROS 把目标送到 PX4，PX4 计算控制输出，Gazebo 模拟无人机运动并把传感器读数反馈给 PX4。试验程序接收飞控回传的估计状态。",
        figure: {
          src: "/media/uav-sitl/jky-sitl-architecture.png", width: 2880, height: 1359,
          alt: "软件在环架构图，展示 ROS 上层软件、PX4 SITL 和 Gazebo 之间的指令与反馈",
          caption: "在一台测试电脑上运行的仿真闭环",
        },
      },
    ],
    contributions: [
      ["编写试验大纲与报告", "负责项目全部试验大纲和报告，将试验要求写成可执行的步骤、记录项和合格判据。"],
      ["适配上层软件并运行仿真", "参与 Linux 上层控制代码修改和 ROS 接口适配，在 PX4 与 Gazebo 中检查指令下发和状态回传。"],
      ["分析试验数据", "参与整理 rosbag 记录，按指令切换时刻提取分析窗口，核对计算结果并写入试验报告。"],
    ],
    tech: ["Linux", "ROS 1", "PX4", "Gazebo", "C++", "MAVROS", "rosbag", "MATLAB"],
    caseStudy: {
      title: "验证案例 · 位置控制接口",
      detail: "C++ 试验程序依次发布两组固定位置目标，每组保持 12 秒。控制节点把指令转换成 PX4 能接收的设定值，飞控回传的位置估计经状态汇总后返回试验程序。试验后按时间戳对齐目标和反馈，用 MATLAB 取每组末段 4 秒的位置均值，按各轴目标位置改变量计算稳态相对误差。",
      figure: {
        src: "/media/uav-sitl/jky-position-closed-loop.png", width: 3230, height: 2312,
        alt: "位置控制试验信号流图，上排为目标指令，中排为状态反馈，下排为外部定位支路",
        caption: "一次位置指令的下发与反馈路径",
      },
    },
    evidence: {
      title: "结果",
      detail: "两组目标的 X、Y、Z 轴共六项稳态相对误差均在 20% 的合格阈值内，最大为 5.38%，位置控制接口的软件在环试验通过。用历史录包离线复算的结果与试验报告一致。",
      figure: {
        src: "/media/uav-sitl/jky-position-validation.png", width: 3230, height: 1674,
        alt: "位置控制软件在环试验结果图，比较目标位置与 PX4 位置估计，标出两个稳态分析窗口和六项误差",
        caption: "两组目标下的三轴位置响应与稳态误差",
      },
    },
    stateNote: "2025.09–2026.09 · 已结项。项目已完成合同约定的全部工作。",
    links: [],
  },
  {
    slug: "robotac",
    tone: "competition",
    category: "机器人竞赛 · 全国总决赛一等奖",
    title: "ROBOTAC｜空地协作仿真",
    short: "地面单臂机器人抓取并装载物料，无人机接续定点投送和返航。",
    goal: "第二十五届全国大学生机器人大赛 ROBOTAC AIROBOTIC 创新挑战赛单臂组。地面机器人先导航到物料区，抓取后送入无人机货舱。地面任务结束后，无人机在同一 Isaac Sim 场景中接续起飞，飞往投送区，视觉对准后释放物料，再返回起飞区。",
    competition: {
      role: "从容应队队员",
      year: "2026",
      event: "ROBOTAC AIROBOTIC 创新挑战赛 · 单臂组",
      frames: [
        ["ground-grasp", "地面抓取", "Bobac 的机械臂对准桌面物料，夹取后抬升。"],
        ["ground-load", "装入货舱", "地面机器人移到无人机旁，伸出机械臂完成装载。"],
        ["uav-align", "视觉对准", "无人机到达投送区，利用下视画面修正水平偏差并下降。"],
        ["uav-drop", "定点投送", "物料落在投送区内。无人机随后返回起飞区。"],
      ],
    },
    contributions: [
      ["UDE 视觉精降", "粗对准时，将下视画面中的像素偏差换算成实际距离，并通过指数移动平均减弱抖动。精降时，结合视觉误差、飞行速度和不确定性与扰动估计（UDE），生成水平加速度指令。"],
      ["三轮全向底盘", "针对 Bobac 原模型的低速抖动，按 120° 三轮布局重新推导逆运动学。对速度和加速度限幅，将机身指令换算为三个轮子的目标转速。"],
      ["空地任务交接", "在 Isaac Sim 中通过 ROS 2 和 Micro XRCE-DDS 对接 PX4 SITL。地面控制程序退出后，启动脚本接续运行无人机控制程序。无人机还会读取舱门状态，并在关舱确认后继续起飞流程。"],
    ],
    tech: ["Isaac Sim", "ROS 2", "PX4 SITL", "Micro XRCE-DDS", "Python", "OpenCV", "UDE"],
    stateNote: "2026 · 从容应队获全国总决赛一等奖。",
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
