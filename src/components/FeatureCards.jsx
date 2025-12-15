const features = [
  {
    title: "代码分割",
    detail: "使用 React.lazy + Vite 自动切分 bundle，减少首屏体积。",
    tag: "Performance"
  },
  {
    title: "图片懒加载",
    detail: "IntersectionObserver 延迟加载高清图，示例对比占位与原图。",
    tag: "UX"
  },
  {
    title: "压缩与缓存",
    detail: "Vite 生产构建启用 Tree Shaking、压缩和长缓存策略。",
    tag: "Build"
  },
  {
    title: "可测试性",
    detail: "附带测试用例模板与兼容性检查步骤，便于验收。",
    tag: "QA"
  }
];

export default function FeatureCards() {
  return (
    <section id="features" className="section">
      <h2>优化措施速览</h2>
      <div className="card-grid">
        {features.map(item => (
          <article key={item.title} className="card">
            <span className="pill">{item.tag}</span>
            <h3>{item.title}</h3>
            <p className="muted">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

