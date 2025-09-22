import React from "react";

export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid #eee", marginTop:40}}>
      <div className="container" style={{padding:"24px 0", textAlign:"center", fontSize:14, color:"#555"}}>
        <div>© {new Date().getFullYear()} FashionWeb</div>
        <div style={{fontSize:12, color:"#777", textAlign: "center"}}>Built with React.</div>
      </div>
    </footer>
  );
}
