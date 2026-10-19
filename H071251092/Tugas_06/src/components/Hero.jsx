function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fce7f3, #ede9fe, #dbeafe)",
        padding: "60px 20px",
        textAlign: "center",
        color: "#4c1d95",
      }}
    >
            <img
        src="/profile.jpg"
        alt="Foto profil Alisya"
        style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid white",
            margin: "0 auto 20px",
        }}
        />

       <h1
        style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#7e22ce",
        }}
        >
        Halo, Saya Alisya Nadhifa Raihani!
        </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#6b21a8",
          marginBottom: "24px",
        }}
      >
        Information Systems student at Universitas Hasanuddin.
      </p>

      <button
        onClick={() => console.log("Tombol Hubungi Saya diklik")}
        style={{
          backgroundColor: "#a855f7",
          color: "white",
          padding: "12px 26px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Hubungi Saya
      </button>
    </section>
  );
}

export default Hero;