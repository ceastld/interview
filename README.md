# 面试八股

程序员面试必备知识库，使用 Docusaurus 构建的现代化文档网站。

## 特性

- 📚 **全面覆盖** - 涵盖前端、后端、算法、数据库等各个技术领域
- 🎯 **结构清晰** - 知识点按技术栈分类整理，便于查找和学习
- 🔄 **持续更新** - 紧跟技术发展趋势，定期更新最新内容
- 🎨 **朴素美观** - 简洁的设计风格，专注于内容本身
- 📱 **响应式设计** - 支持各种设备访问

## 技术栈

- [Docusaurus](https://docusaurus.io/) - 静态站点生成器
- [React](https://reactjs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [MDX](https://mdxjs.com/) - Markdown + JSX

## 本地开发

### 环境要求

- Node.js >= 20.0
- pnpm (推荐) 或 npm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
pnpm run build
```

### 预览生产版本

```bash
pnpm run serve
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 每次推送到 main 分支时自动部署

### 自定义部署

如果需要部署到其他平台，可以修改 `docusaurus.config.ts` 中的配置：

```typescript
const config: Config = {
  // 修改这些配置
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: 'your-username',
  projectName: 'interview',
  // ...
};
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

MIT License
