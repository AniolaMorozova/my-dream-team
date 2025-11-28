import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/anna.JPG"} alt="Anna Morozova" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Annafdsfsdf Morozova</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
          </div>

          <div style={styles.card}>
              <img src={"/anastasiia.png"} alt="Olha Sokolska" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>fdfadsf Sokolska</h2>
                  <h2 style={styles.name}>Anastasiia Sokolska</h2>
                  <p style={styles.position}>QA Engineer</p>
              </div>
          </div>


          <div style={styles.card}>
              <img src={"/artem.jpg"} alt="Artem Yarmoliuk" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Artem Yarmoliuk</h2>
                  <p style={styles.position}>Business Analyst</p>
              </div> 
          </div>     


          <div style={styles.card}>
              <img src={"/daryna.jpg"} alt="Baranova Daryna" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Daryna Baranova</h2>
                  <p style={styles.position}>Designer</p>
              </div>
          </div>

          <div style={styles.card}>
              <img src={"/kostyantyn.png"} alt="Kostyantyn Kann" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Kostyantyn Kann</h2>
                  <p style={styles.position}>Developer</p>
              </div>
          </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
