function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
    "Responsive Web Design",
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#faf5ff",
        padding: "50px 20px",
        textAlign: "center",
        color: "#4c1d95",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#ec4899",
          marginBottom: "25px",
        }}
      >
        Keahlian Saya
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              color: "#7e22ce",
              padding: "15px 25px",
              borderRadius: "15px",
              border: "2px solid #e9d5ff",
              boxShadow: "0 3px 8px rgba(126, 34, 206, 0.1)",
              fontWeight: "bold",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;