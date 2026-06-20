# migu-api-enhanced

基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署。

## 技术栈

![Hono](https://img.shields.io/badge/Hono-4.x-E36002?logo=hono&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Domdkw/migu-api-enhanced)
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Domdkw/migu-api-enhanced)
[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https://github.com/Domdkw/migu-api-enhanced)
[![Deploy on Deno](https://deno.com/button)](https://console.deno.com/new?clone=https://github.com/Domdkw/migu-api-enhanced)

## 特性

- 基于 Hono 框架，轻量高性能
- TypeScript 编写，类型安全
- 多平台支持：Node.js、Cloudflare Workers、Deno、Vercel
- 内置缓存机制
- 完整的音乐 API 接口

## 项目结构

```
migu-api-enhanced/
├── src/
│   ├── adapters/      # 平台适配器
│   ├── routes/        # API 路由
│   ├── types/         # 类型定义
│   └── utils/         # 工具函数
├── postman/           # Postman 集合
└── package.json
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
# Node.js 环境
pnpm run dev

# Cloudflare Workers
pnpm run dev:cf

# Deno 环境
pnpm run dev:deno
```

### 部署

```bash
# Cloudflare Workers
pnpm run deploy:cf

# Vercel
pnpm run deploy:vercel

# Deno
pnpm run deploy:deno
```

## API 接口

项目提供丰富的音乐 API 接口，包括：

- 搜索（歌曲、歌手、专辑）
- 歌单信息
- 歌手信息
- 排行榜
- 推荐内容
- 评论
- 音频资源

详细接口文档请参考 `postman/enhanced-api.postman_collection.json`。

## 许可证

本项目采用 [Apache License 2.0](LICENSE) 许可证。

## 免责声明

本项目仅供学习和研究使用，不得用于商业用途。

本项目通过非官方接口获取数据，与咪咕音乐官方无任何关联。使用本项目所产生的一切后果由使用者自行承担，项目作者不承担任何责任。

本项目所涉及的音视频资源版权归咪咕音乐所有，请支持正版音乐。

请勿将本项目用于任何违反法律法规的用途，包括但不限于：
- 商业用途
- 大规模爬取数据
- 侵犯他人权益
- 其他违法行为

使用本项目即表示您已阅读并同意以上声明。