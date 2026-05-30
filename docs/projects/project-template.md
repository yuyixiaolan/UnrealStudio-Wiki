---
outline: deep
---

# 项目模板

创建新项目文档时，复制此文件作为起点。

```yaml
---
title: 项目名称
author: 作者名
date: 2025-XX-XX
status: 进行中
tags: [UE5, 蓝图, 游戏类型]
---
```

## 概述

用 2–3 句话说明：

- 这是一个什么样的项目
- 目标是什么
- 目标受众/平台

## 项目信息

| 字段 | 内容 |
|------|------|
| 引擎版本 | UE 5.4 |
| 项目周期 | 2025.09 – 2025.12 |
| 团队成员 | 策划: xxx, 程序: xxx, 美术: xxx |
| 仓库地址 | `https://github.com/...` |

## 技术选型

列出项目中使用的关键技术和选择理由。

**核心插件**
- Enhanced Input System（引擎自带）
- Motion Warping（引擎自带）
- Common UI（引擎自带）

**第三方插件**
- 插件名 | 用途 | 来源

**资产来源**
- Quixel Megascans / Sketchfab / 自制

## 架构概览

```text
ProjectName/
├─ Content/
│  ├─ Characters/       # 角色蓝图与动画
│  ├─ Maps/             # 关卡地图
│  ├─ Blueprints/       # 通用蓝图逻辑
│  ├─ Materials/        # 材质与材质实例
│  └─ UI/               # 用户界面
└─ Source/
   └─ ProjectName/
      ├─ Characters/    # C++ 角色类
      ├─ Components/    # 自定义组件
      ├─ GameModes/     # 游戏模式
      └─ UI/            # HUD / 控件
```

## 关键实现

记录项目中值得注意的技术点。使用代码块展示核心逻辑。

### 示例：角色冲刺功能

```cpp
// 头文件中声明
UFUNCTION(BlueprintCallable)
void StartSprint();

// 实现
void AMyCharacter::StartSprint()
{
    if (GetCharacterMovement())
    {
        GetCharacterMovement()->MaxWalkSpeed = SprintSpeed;
    }
}
```

## 踩坑记录

记录开发过程中遇到的问题和解决方案。按时间倒序。

| 日期 | 问题 | 原因 | 解决 |
|------|------|------|------|
| 2025-10-01 | 动画蓝图状态机卡住 | Transition 条件没写返回 false 的路径 | 补充 default 状态过渡 |

## 开发日志

### 2025-10-01

- 完成角色基础移动逻辑
- 搭建了测试关卡
- 遇到 xxx 问题，通过 xxx 解决

### 2025-09-28

- 项目初始化
- 配置 gitignore 和 LFS
- 确定技术方案

## 成果展示

- 截图 / GIF / 视频链接
- 可执行文件下载链接（如有）
- 项目展示 PPT 链接

## 结项回顾

项目结束后填写：

### 做得好的地方

### 可以改进的地方

### 给下一届的建议
