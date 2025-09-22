import React from "react";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" style={{padding:"60px 0", textAlign:"center", background:"#fafafa"}}>
        <h1>Chào mừng đến với FashionWeb</h1>
        <p>Mua sắm thời trang dễ dàng, nhanh chóng và tiện lợi.</p>
      </section>

      <section className="features container" style={{padding:"40px 0"}}>
        <h2>Sản phẩm nổi bật</h2>
        <div style={{display:"flex", gap:20, marginTop:20}}>
          <div style={{flex:1, border:"1px solid #ddd", padding:20}}>Sản phẩm A</div>
          <div style={{flex:1, border:"1px solid #ddd", padding:20}}>Sản phẩm B</div>
          <div style={{flex:1, border:"1px solid #ddd", padding:20}}>Sản phẩm C</div>
        </div>
      </section>
    </div>
  );
}
