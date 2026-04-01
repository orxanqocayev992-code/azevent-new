import { Link } from "react-router-dom";
import { services } from "../data/services";

function ServicesPage() {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.brand}>AzEvent</Link>
        <div style={styles.navRight}>
          <Link to="/" style={styles.navLink}>Ana səhifə</Link>
          <Link to="/about" style={styles.navLink}>Haqqımızda</Link>
          <Link to="/contact" style={styles.navLink}>Əlaqə</Link>
        </div>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.title}>Xidmətlər</h1>
        <p style={styles.subtitle}>
          Tədbiriniz üçün uyğun xidmətləri seçin və ətraflı baxın.
        </p>

        <div style={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/service/${service.slug}`}
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <div
                  style={{
                    ...styles.image,
                    backgroundImage: `linear-gradient(rgba(12,12,12,0.08), rgba(12,12,12,0.45)), url('${service.banner}')`,
                  }}
                />
                <div style={styles.body}>
                  <div style={styles.icon}>{service.icon}</div>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardText}>{service.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", backgroundColor: "#070707", color: "#f5f1e8", fontFamily: "Arial, sans-serif" },
  navbar: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  brand: { textDecoration: "none", fontSize: "40px", fontWeight: "700", color: "#e5c98e" },
  navRight: { display: "flex", gap: "24px", flexWrap: "wrap" },
  navLink: { textDecoration: "none", color: "#f0ebe0", fontSize: "17px" },
  container: { maxWidth: "1250px", margin: "0 auto", padding: "20px 20px 80px" },
  title: { fontSize: "52px", marginBottom: "12px", color: "#f0e5cc" },
  subtitle: { fontSize: "18px", color: "#c8c1b4", lineHeight: "1.7", marginBottom: "34px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "22px" },
  cardLink: { textDecoration: "none" },
  card: { backgroundColor: "#101010", border: "1px solid rgba(183,154,98,0.18)", borderRadius: "22px", overflow: "hidden" },
  image: { height: "210px", backgroundSize: "cover", backgroundPosition: "center" },
  body: { padding: "22px" },
  icon: {
    width: "56px", height: "56px", borderRadius: "16px", display: "flex",
    alignItems: "center", justifyContent: "center", backgroundColor: "rgba(183,154,98,0.08)",
    marginBottom: "16px", fontSize: "25px",
  },
  cardTitle: { fontSize: "28px", marginBottom: "10px", color: "#f2ebdb" },
  cardText: { fontSize: "16px", lineHeight: "1.8", color: "#c9c2b6" },
};

export default ServicesPage;