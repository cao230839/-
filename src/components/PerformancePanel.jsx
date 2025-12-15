const optimizations = [
  {
    title: "懒加载图片",
    description: "使用 IntersectionObserver + loading=\"lazy\"，减少首屏请求。"
  },
  {
    title: "代码分割",
    description: "React.lazy 按需加载画廊模块，避免一次性加载重资源。"
  },
  {
    title: "资源压缩",
    description: "Vite 生产构建开启 Terser/ESBuild 压缩与 Tree Shaking。"
  }
];

export default function PerformancePanel() {
  return (
    <section className="section">
      <h2>性能优化原理</h2>
      <div className="panel">
        {optimizations.map(item => (
          <div key={item.title} className="panel__row">
            <div>
              <strong>{item.title}</strong>
              <p className="muted">{item.description}</p>
            </div>
            <span className="status success">优化</span>
          </div>
        ))}
        <div className="panel__note">
          <p>
            提示：使用浏览器开发者工具（Performance / Lighthouse）记录首屏、
            可交互时间，优化前先保存一次报告；应用上述优化后再测量并对比。
          </p>
        </div>
      </div>
    </section>
  );
}

