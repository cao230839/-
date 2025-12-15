# 项目总结报告提纲（可导出为 PDF）

1. 项目概述  
   - 技术栈：React + Vite，模块化 + 代码分割。  
   - 目标：性能优化示例、测试与部署流程演示。

2. 性能分析与优化  
   - 工具与指标：Lighthouse/Performance（FCP、LCP、TTI、Total Size）。  
   - 优化措施与原理：  
     - 代码分割：`React.lazy` + Vite Rollup chunk（减少首屏 bundle）。  
     - 懒加载图片：`IntersectionObserver` + `loading="lazy"`（减少首屏请求）。  
     - 构建压缩：Vite 生产构建 Tree Shaking + 压缩（减小传输体积）。  
   - 效果对比：  
     - 优化前 Lighthouse 截图与指标表格。  
     - 优化后 Lighthouse 截图与指标表格。  
     - 文字结论（哪些指标提升、原因）。

3. 功能与兼容性测试  
   - 功能用例列表：见 README，补充执行结果（通过/问题）。  
   - 兼容性：Chrome + Firefox 截图，说明差异与修复情况（若有）。  
   - 遇到问题与解决方案。

4. 部署流程  
   - 平台选择（Vercel/Netlify/GitHub Pages），构建命令 `npm run build`，产物目录 `dist/`。  
   - 部署链接与可访问性检查（含移动端/桌面端）。  
   - 缓存与版本策略（Vite hashed filename，长缓存）。

5. 个人收获与反思  
   - 对性能优化的理解与可迁移经验。  
   - 对测试、兼容性与部署流程的反思。

> 填写上述条目后，使用浏览器打印为 PDF 即可提交。

