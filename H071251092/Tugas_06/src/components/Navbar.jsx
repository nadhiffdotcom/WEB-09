function Navbar() {
  const menu = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Profile", href: "#about" },
    { id: 3, label: "Gallery", href: "#gallery" },
    { id: 4, label: "Contact", href: "#contact" },
  ];

  function handleMenuClick(label) {
    console.log("Menu " + label + " diklik");
  }

  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <h2 style={{ color: "#e82abf", margin: 0 }}>
        Alisya
      </h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          flexWrap: "wrap",
        }}
      >
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => handleMenuClick(item.label)}
              style={{
                color: "#7e22ce",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;