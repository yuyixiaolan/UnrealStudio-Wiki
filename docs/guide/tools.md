---
outline: deep
---

# 常用工具

工作室推荐的开发工具集。不是强制，但能大幅提升效率。

## 必备工具

| 工具 | 用途 | 推荐版本 |
|------|------|----------|
| [Visual Studio 2022](https://visualstudio.microsoft.com/) | C++ IDE | Community 2022 |
| [Rider for Unreal](https://www.jetbrains.com/rider/) | UE 专用 IDE（可选） | 最新版 |
| [GitHub Desktop](https://desktop.github.com/) | Git 可视化 | 最新版 |
| [Blender](https://www.blender.org/) | 3D 建模 | 4.0+ |
| [Substance Painter](https://www.substance3d.com/) | 材质贴图（正版） | 9.0+ |

## 推荐工具

### 代码 & 版本管理

- **GitHub CLI (`gh`)** — 命令行管理 Issue / PR
- **GitLens** (VS Code 插件) — IDE 内查看 git 历史
- **Beyond Compare** — 差异对比与合并

### 蓝图 & 资源

- **UE Blueprint Diff** — 引擎自带的蓝图差异对比（右键 → 与…对比）
- **Asset Manager** — 引擎自带的资源管理面板

### 文档 & 写作

- **MarkText / Typora** — Markdown 编辑器，写 Wiki 文档很方便
- **draw.io** — 免费流程图、架构图绘制

### 性能分析

- **Unreal Insights** — UE5 内置性能分析工具，定位 CPU/GPU 瓶颈
- **RenderDoc** — 图形调试器，抓帧分析渲染问题
- **Intel GPA** — GPU 性能分析

## Visual Studio 配置要点

安装时务必勾选以下工作负载：

- **使用 C++ 的游戏开发**
- .NET 桌面开发
- Windows 10/11 SDK (10.0.20348.0 以上)

安装完后，在 VS 中设置：

```
工具 → 选项 → 文本编辑器 → C/C++ → 高级 → 启用 ClangFormat 支持
```

## 工作流建议

```
写代码 → Rider / VS
美术资产 → Blender → Substance → UE
文档 → Markdown → 提交到 Wiki 仓库 → 自动部署
任务追踪 → GitHub Projects / 飞书多维表格
```
