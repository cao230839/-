# 前端性能优化实验站点

基于 React + Vite 的性能优化与测试示例，用于完成实验任务：性能分析与优化、功能与兼容性测试、部署与总结。

## 快速开始
```bash
npm install
npm run dev      # 启动开发环境
npm run build    # 生成生产版 dist/
npm run preview  # 预览生产版
```

## 实验任务指引

### 任务一：性能分析与优化
- 优化点已内置：代码分割（`React.lazy`）、图片懒加载（`IntersectionObserver` + `loading="lazy"`）、生产构建压缩/Tree Shaking（Vite 默认）。
- 建议步骤：
  1) `npm run dev`，打开 `http://localhost:5173`，用 Lighthouse 导出优化前报告（保存截图）。
  2) `npm run build && npm run preview`，使用预览地址再次跑 Lighthouse，导出优化后报告（保存截图）。
  3) 在报告中对比首屏/可交互时间、总大小，写入实验报告。

### 任务二：功能测试与兼容性测试
- 功能测试用例（可扩充）：
  1) 页面加载：首屏展示标题、按钮、卡片。
  2) 导航锚点：点击“查看优化方案/测试清单”跳转到对应分区。
  3) 懒加载：滚动到“懒加载示例画廊”后图片才请求，且显示高清图。
  4) 响应式：在窗口 < 600px 时布局单列、按钮纵向排列。
- 兼容性：在 Chrome（Blink）与 Firefox（Gecko）打开页面，截图展示正常渲染与交互。

### 任务三：部署与总结
- 部署建议：Vercel/Netlify 直接导入仓库，Build 命令 `npm run build`，Publish 目录 `dist`。
- 需要提交：
  - 公网访问链接。
  - Lighthouse 前后对比截图与测试截图。
  - 实验总结报告（PDF），可按以下提纲：
    1) 项目回顾与架构简介。
    2) 性能瓶颈与优化措施（原理 + 成效）。
    3) 功能/兼容测试结果与问题修复。
    4) 部署流程与踩坑。
    5) 个人收获与反思。

## 目录结构
```
├─ index.html
├─ package.json
├─ vite.config.js
└─ src
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   └─ components
      ├─ FeatureCards.jsx
      ├─ Hero.jsx
      ├─ LazyGallery.jsx
      └─ PerformancePanel.jsx
```

## 说明
- 懒加载画廊使用远程图片，需联网预览。
- 若需离线演示，可将图片放入 `public/` 并替换 `LazyGallery.jsx` 中的链接。

