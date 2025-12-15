export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="badge">前端性能实验站点</p>
        <h1>更快、更稳、更易部署</h1>
        <p className="muted">
          集成性能优化示例（代码分割、懒加载、图片优化）、基础测试和部署
          提示，帮助你快速完成实验报告。
        </p>
        <div className="hero__cta">
          <a className="button primary" href="#features">
            查看优化方案
          </a>
          <a className="button ghost" href="#testing">
            查看测试清单
          </a>
        </div>
      </div>
      <div className="hero__visual" role="presentation">
        <div className="hero__glass">
          <p>首屏优化</p>
          <strong>2+ 提升点</strong>
          <span>懒加载 / 资源拆分 / 图片压缩</span>
        </div>
        <div className="hero__glass">
          <p>测试覆盖</p>
          <strong>功能 + 兼容</strong>
          <span>Chrome / Firefox</span>
        </div>
      </div>
    </header>
  );
}

