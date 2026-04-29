import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.title}>เกี่ยวกับเรา</h3>
          <p style={styles.text}>
            เว็บไซต์ขายเครื่องดนตรีออนไลน์ สินค้าคุณภาพดี ราคาถูก
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>ลิงก์</h3>
          <ul style={styles.list}>
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
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>ติดต่อ</h3>
          <p style={styles.text}>📍 กรุงเทพมหานคร</p>
          <p style={styles.text}>📞 02-123-4567</p>
          <p style={styles.text}>✉️ info@musicstore.com</p>
        </div>
      </div>
      <div style={styles.copyright}>
        © 2026 Music Store. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "40px 20px 20px",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "30px",
  },
  section: {
    flex: "1 1 250px",
    minWidth: "200px",
  },
  title: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#f0c040",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "8px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    margin: "8px 0",
  },
  copyright: {
    textAlign: "center",
    paddingTop: "20px",
    marginTop: "30px",
    borderTop: "1px solid #555",
    fontSize: "14px",
    color: "#aaa",
  },
};
