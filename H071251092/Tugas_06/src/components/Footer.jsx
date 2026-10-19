function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#e52d9b",
        color: "#ffffff",
        textAlign: "center",
        padding: "25px 15px",
      }}
    >
      <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>
        Alisya Nadhifa Raihani
      </p>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Alisya Nadhifa Raihani. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;