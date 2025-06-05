import React from "react";

const ProficiencySection = () => {
  const skills = [
    { icon: "fas fa-paint-brush", label: "Graphic Designing" },
    { icon: "fas fa-cube", label: "3D Modeling" },
    { icon: "fas fa-video", label: "Video Editing" },
    { icon: "fas fa-code", label: "Web Development" },
  ];

  const styles = {
    section: {
      maxWidth: "1200px",
      padding: "20px",
      border: "1px solid #3a3a3a",
      borderRadius: "12px",
      color: "#f0f0f0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "5px",
    },
    title: {
      
      
      fontSize: "2rem",
      fontWeight: "500",
      margin: "0 0 12px",
      width: "fit-content",
      color: "#fbbf24"
    },
    description: {
      maxWidth: "1000px",
      fontSize: "1.1rem",
      lineHeight: "0.3",
      color: "#e0e0e0",
      marginBottom: "40px",
    },
    skillsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "150px",
      flexWrap: "wrap",
    },
    skillCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "default",
      color: "#dcdcdc",
      width: "120px",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    skillCardHover: {
      transform: "scale(1.1)",
      color: "#ffffff",
    },
    skillIcon: {
      fontSize: "48px",
      backgroundColor: "rgba(255,255,255,0.15)",
      padding: "9px",
      borderRadius: "50%",
      boxShadow: "0 6px 10px rgba(0,0,0,0.3)",
      marginBottom: "14px",
    },
    skillLabel: {
      fontWeight: "600",
      fontSize: "1.1rem",
      textAlign: "center",
      whiteSpace: "nowrap", /* prevents line break */
      
    },
  };

  // To handle hover effect inline, we’ll do a simple state toggle per card
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Proficiency</h2>
        <p style={styles.description}>
          Skilled in a variety of creative and technical domains that bring ideas to life with passion and precision.
        </p>
      </div>

      <div style={styles.skillsContainer}>
        {skills.map(({ icon, label }, index) => (
          <div
            key={label}
            style={{
              ...styles.skillCard,
              ...(hoveredIndex === index ? styles.skillCardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <i className={icon} style={styles.skillIcon}></i>
            <span style={styles.skillLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProficiencySection;
