import React from "react";

export default function Nav() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h1 style={styles.logo}>🎵 Music Store</h1>
        <ul style={styles.menu}>
          <li>
            <a href="#" style={styles.link}>
              หน้าหลัก
            </a>
          </li>
          <li>
            <a href="#" style={styles.link}>
              สินค้า
            </a>
          </li>
          <li>
            <a href="#" style={styles.link}>
              ติดต่อ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "15px 20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
    color: "#f0c040",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};
