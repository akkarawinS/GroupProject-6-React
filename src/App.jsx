import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <h1>ยินดีต้อนรับสู่ Music Store 🎵</h1>
      </main>
      <Footer />
    </>
  );
}
