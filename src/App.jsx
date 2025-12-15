import React, { Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import FeatureCards from "./components/FeatureCards.jsx";
import PerformancePanel from "./components/PerformancePanel.jsx";

const LazyGallery = React.lazy(() => import("./components/LazyGallery.jsx"));

export default function App() {
  const [isGalleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setGalleryVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );
    const target = document.querySelector("#gallery-anchor");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Hero />
      <FeatureCards />
      <PerformancePanel />
      <section id="gallery-anchor" className="section">
        <h2>懒加载示例画廊</h2>
        <p className="muted">
          当滚动到此区域附近时才会按需加载图片与代码。
        </p>
        <Suspense fallback={<p>正在加载高清图片与组件…</p>}>
          {isGalleryVisible && <LazyGallery />}
        </Suspense>
      </section>
      <footer className="footer">
        <p>性能优化 · 功能测试 · 部署示例 | 适配桌面与移动端</p>
      </footer>
    </div>
  );
}

