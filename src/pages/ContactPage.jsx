import { Link } from "react-router-dom";
import { appConfig } from "../data/services";

function ContactPage() {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.brand}>
          AzEvent
        </Link>

        <div style={styles.navRight}>
          <Link to="/" style={styles.navLink}>
            Ana səhifə
          </Link>
          <Link to="/services" style={styles.navLink}>
            Xidmətlər
          </Link>
          <Link to="/about" style={styles.navLink}>
            Haqqımızda
          </Link>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.contactCard}>
          <div style={styles.contactBadge}>Əlaqə və sifariş</div>

          <h1 style={styles.title}>Bizimlə əlaqə saxlayın</h1>

          <p style={styles.text}>
            Tədbiriniz üçün uyğun xidməti seçmək, qiymət almaq və sifariş vermək
            üçün aşağıdakı əlaqə seçimlərindən istifadə edə bilərsiniz.
          </p>

          <div style={styles.infoGrid}>
            <a href="tel:+994702773533" style={styles.infoBoxLink}>
              <div style={styles.infoBox}>
                <div style={styles.infoLabel}>Telefon</div>
                <div style={styles.infoRow}>
                  <span style={styles.infoIcon}>📞</span>
                  <div style={styles.infoValue}>+994 70 277 35 33</div>
                </div>
              </div>
            </a>

            <a
              href={appConfig.instagramLink}
              target="_blank"
              rel="noreferrer"
              style={styles.infoBoxLink}
            >
              <div style={styles.infoBox}>
                <div style={styles.infoLabel}>Instagram</div>
                <div style={styles.infoRow}>
                  <span style={styles.infoIcon}>📷</span>
                  <div style={styles.infoValue}>Instagram səhifəmiz</div>
                </div>
              </div>
            </a>

            <a href={appConfig.apkLink} download style={styles.infoBoxLink}>
              <div style={styles.infoBox}>
                <div style={styles.infoLabel}>Download</div>
                <div style={styles.infoRow}>
                  <span style={styles.infoIcon}>⬇️</span>
                  <div style={styles.infoValue}>AzEvent APK Yüklə</div>
                </div>
              </div>
            </a>
          </div>

          <div style={styles.buttons}>
            <a
              href={appConfig.instagramLink}
              target="_blank"
              rel="noreferrer"
              style={styles.primaryBtn}
            >
              Instagram-a keç
            </a>

            <a href={appConfig.apkLink} style={styles.secondaryBtn} download>
              APK yüklə
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#070707",
    color: "#f5f1e8",
    fontFamily: "Arial, sans-serif",
  },
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
  brand: {
    textDecoration: "none",
    fontSize: "40px",
    fontWeight: "700",
    color: "#e5c98e",
  },
  navRight: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#f0ebe0",
    fontSize: "17px",
  },
  container: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "20px 20px 80px",
  },
  contactCard: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "linear-gradient(180deg, #111111 0%, #171717 100%)",
    border: "1px solid rgba(183,154,98,0.18)",
    borderRadius: "26px",
    padding: "34px 26px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
    textAlign: "center",
  },
  contactBadge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(183,154,98,0.10)",
    border: "1px solid rgba(183,154,98,0.20)",
    color: "#c8ab72",
    fontSize: "14px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "48px",
    margin: "0 0 14px 0",
    color: "#f0e5cc",
  },
  text: {
    color: "#c9c2b6",
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "28px",
    maxWidth: "820px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  },
  infoBoxLink: {
    textDecoration: "none",
  },
  infoBox: {
    backgroundColor: "#0d0d0d",
    border: "1px solid rgba(183,154,98,0.14)",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "left",
    minHeight: "110px",
    cursor: "pointer",
    transition: "0.25s",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#a79f91",
    marginBottom: "8px",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  infoIcon: {
    fontSize: "22px",
    lineHeight: "1",
  },
  infoValue: {
    fontSize: "18px",
    color: "#f2ebdb",
    fontWeight: "700",
    lineHeight: "1.5",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    textDecoration: "none",
    display: "inline-block",
    backgroundColor: "#b48a49",
    color: "#ffffff",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "17px",
  },
  secondaryBtn: {
    textDecoration: "none",
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.03)",
    color: "#f2ede2",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "17px",
    border: "1px solid rgba(255,255,255,0.16)",
  },
};

export default ContactPage;