function About() {
  const dataDiri = [
    { id: 1, label: "Nama", isi: "Alisya Nadhifa Raihani" },
    { id: 2, label: "Status", isi: "Mahasiswa" },
    {
      id: 3,
      label: "Tentang",
      isi: "Mahasiswa Sistem Informasi Universitas Hasanuddin yang memiliki ketertarikan terhadap dunia pemrograman web, desain antarmuka, dan teknologi digital.",
    },
    { id: 4, label: "Minat", isi: "Dokumetasi, editing, desain grafis, pengembangan web" },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: "50px 20px",
        textAlign: "center",
        color: "#4c1d95",
      }}
    >
          <h2
      style={{
        fontSize: "30px",
        marginBottom: "15px",
        color: "#8515e0",
      }}
    >
      Tentang Saya
    </h2>

      <p
        style={{
          maxWidth: "650px",
          margin: "0 auto 25px",
          color: "#6b21a8",
        }}
      >
        Mahasiswa Sistem Informasi Universitas Hasanuddin 
        yang memiliki ketertarikan terhadap dunia pemrograman web,
        desain antarmuka, dan teknologi digital.
      </p>

      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        {dataDiri.map((item) => (
          <p
            key={item.id}
            style={{
              backgroundColor: "#f3e8ff",
              padding: "14px",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          >
            <strong>{item.label}:</strong> {item.isi}
          </p>
        ))}
      </div>
    </section>
  );
}

export default About;