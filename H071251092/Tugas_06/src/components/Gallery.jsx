import gallery1 from "../assets/gallery/kbs.jpg";
import gallery2 from "../assets/gallery/MiniVerse.jpg";
import gallery3 from "../assets/gallery/magang.jpg";
import gallery4 from "../assets/gallery/magang2.jpg";

function Gallery() {
  const daftarGaleri = [
    {
      id: 1,
      gambar: gallery1,
      judul: "KBS",
      deskripsi: "Kalkulator desktop Python dengan beragam fitur matematika.",
    },
    {
      id: 2,
      gambar: gallery2,
      judul: "MiniVerse",
      deskripsi:
        "Aplikasi desktop berbasis Java yang berisi tiga permainan sederhana.",
    },
    {
      id: 3,
      gambar: gallery3,
      judul: "Dokumentasi Event Telkom",
      deskripsi: "Mendokumentasikan kegiatan event Telkom.",
    },
    {
      id: 4,
      gambar: gallery4,
      judul: "Pengalaman Magang",
      deskripsi:
        "Menginput data pelanggan dan membuat laporan bulanan.",
    },
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "50px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
        color: "#4c1d95",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          color: "#ec4899",
          marginBottom: "10px",
        }}
      >
        Galeri Saya
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "30px",
        }}
      >
        Beberapa proyek dan pengalaman saya.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {daftarGaleri.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#faf5ff",
              padding: "15px",
              borderRadius: "15px",
              border: "2px solid #f5d0fe",
              boxShadow: "0 4px 10px rgba(126, 34, 206, 0.08)",
            }}
          >
            <img
              src={item.gambar}
              alt={item.judul}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3
              style={{
                color: "#7e22ce",
                fontSize: "18px",
                margin: "15px 0 8px",
              }}
            >
              {item.judul}
            </h3>

            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;