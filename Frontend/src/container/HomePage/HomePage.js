import React from "react";
import HomeBanner from "../../components/HomeFeature/HomeBanner";
import MainFeature from "..//../components/HomeFeature/MainFeature";
import ProductFeature from "..//..//components/HomeFeature/ProductFeature";
import NewProductFeature from "..//../components/HomeFeature/NewProductFeature";
import HomeBlog from "..//../components/HomeFeature/HomeBlog";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Banner chính */}
      <HomeBanner />

      {/* USP / lý do chọn shop (component) */}
      <section className="container" style={{ padding: "32px 0" }}>
        <MainFeature />
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="container" style={{ padding: "24px 0" }}>
        <h2 style={{ marginBottom: 16 }}>Sản phẩm nổi bật</h2>
        <ProductFeature />
      </section>

      {/* Sản phẩm mới */}
      <section className="container" style={{ padding: "24px 0" }}>
        <h2 style={{ marginBottom: 16 }}>Hàng mới về</h2>
        <NewProductFeature />
      </section>

      {/* Blog / tin tức */}
      <section className="container" style={{ padding: "24px 0 40px" }}>
        <h2 style={{ marginBottom: 16 }}>Bài viết mới</h2>
        <HomeBlog />
      </section>
    </div>
  );
}
