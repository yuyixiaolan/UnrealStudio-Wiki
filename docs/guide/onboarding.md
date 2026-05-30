---
outline: deep
---

# 入职流程

从收到邀请到开始写代码，大约需要 30 分钟。

## 第一步：入室登记

1. 找到管理员（群主或当期组长）完成实名登记
2. 填写《工作室成员信息表》（腾讯文档 / 飞书）
3. 加入工作室 GitHub Organization

## 第二步：开通权限

| 资源 | 对接人 | 备注 |
|------|--------|------|
| GitHub 组织仓库 | 技术组长 | 授予读写权限 |
| 飞书/企业微信 | 管理员 | 项目群 + 通知频道 |
| 共享素材盘 | 美术组长 | 若需素材资源 |
| Perforce / SVN | 技术组长 | 大版本管理使用 |

## 第三步：配置本地环境

### 3.1 安装 Unreal Engine

推荐通过 **Epic Games Launcher** 安装（最简单），或从 GitHub 源码编译（需要耐心）。

```
启动器路径: 虚幻引擎 → 库 → 引擎版本 → 安装
推荐的引擎版本: 5.3 或 5.4
```

> 如需特定版本，请先与组内确认。

### 3.2 配置 Git LFS

虚幻项目中的 `.uasset`、贴图、音频等二进制文件必须通过 Git LFS 管理：

```bash
git lfs install
git lfs track "*.uasset"
git lfs track "*.umap"
git lfs track "*.png"
git lfs track "*.wav"
git lfs track "*.fbx"
```

### 3.3 关联本 Wiki

```bash
git clone https://github.com/yuyixiaolan/UnrealStudio-Wiki.git
cd UnrealStudio-Wiki
npm install
```

## 第四步：看看现有项目

访问[项目文档](/projects/)页面，了解工作室正在进行的项目和往期成果。选择一个感兴趣的方向，与组长沟通分工。

## 常见问题

**Q: 磁盘空间不够怎么办？**
A: UE 可以安装在移动硬盘，但强烈建议放在 SSD 上。可清理 `C:\Users\<你>\AppData\Local\UnrealEngine` 中的缓存文件。

**Q: 没有收到 GitHub 邀请？**
A: 请私聊管理员并提供你的 GitHub 用户名或绑定邮箱。
