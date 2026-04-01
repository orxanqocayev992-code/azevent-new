import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services, appConfig } from "../data/services";

function HomePage() {
  const [showImportantModal, setShowImportantModal] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("azevent_important_seen");
    if (!alreadySeen) {
      setShowImportantModal(true);
    }
  }, []);

  const handleCloseImportantModal = () => {
    localStorage.setItem("azevent_important_seen", "true");
    setShowImportantModal(false);
  };

  return (
    <div style={styles.page}>
      {showImportantModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <button
              onClick={handleCloseImportantModal}
              style={styles.modalClose}
            >
              ✕
            </button>

            <div style={styles.modalEmoji}>😊</div>
            <h2 style={styles.modalTitle}>Vacib Məlumat</h2>

            <p style={styles.modalText}>
              Hörmətli müştəri, xidmət seçməzdən əvvəl məlumatları diqqətlə
              oxuyun.
            </p>

            <p style={styles.modalText}>
              Sifariş, əlaqə və xidmət detalları bölmələrdə ayrıca göstərilir.
              Əlavə məlumat üçün bizimlə birbaşa əlaqə saxlaya bilərsiniz.
            </p>
          </div>
        </div>
      )}

      <header style={styles.hero}>
        <div style={styles.heroOverlay}>
          <nav style={styles.navbar}>
            <Link to="/" style={styles.brandWrap}>
              <div style={styles.brandTop}>PREMIUM EVENT SERVICES</div>
              <div style={styles.brand}>AzEvent</div>
            </Link>

            <div style={styles.navMenu}>
              <Link to="/" style={styles.navLink}>
                Ana Səhifə
              </Link>
              <Link to="/services" style={styles.navLink}>
                Xidmətlər
              </Link>
              <Link to="/about" style={styles.navLink}>
                Haqqımızda
              </Link>
              <Link to="/contact" style={styles.navLink}>
                Əlaqə
              </Link>
              <a href={appConfig.apkLink} style={styles.topDownloadBtn} download>
                Download App
              </a>
            </div>
          </nav>

          <div style={styles.heroGrid}>
            <div style={styles.leftSide}>
              <div style={styles.smallBadge}>AzEvent App</div>

              <h1 style={styles.mainTitle}>AzEvent</h1>

              <p style={styles.mainText}>
                DJ, Aparıcı, Djembe, Decor, Photo & Video və İcarə xidmətlərini
                bir platformada birləşdirən müasir event həlli.
              </p>

              <div style={styles.heroButtons}>
                <a
                  href={appConfig.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.whatsappBtn}
                >
                  Instagram-a keç
                </a>

                <Link to="/services" style={styles.viewServicesBtn}>
                  Xidmətlərə bax
                </Link>
              </div>
            </div>

            <div style={styles.downloadCard}>
              <div style={styles.downloadIconBox}>↓</div>
              <h3 style={styles.downloadTitle}>AzEvent App</h3>
              <p style={styles.downloadDesc}>
                Tədbir xidmətlərini daha sürətli yoxla, seç və sifariş et.
              </p>
              <a href={appConfig.apkLink} style={styles.apkBtn} download>
                APK Yüklə
              </a>
              <p style={styles.downloadInfo}>Android üçün</p>
            </div>
          </div>
        </div>
      </header>

      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Xidmətlərimiz</h2>
        <p style={styles.sectionSubtitle}>
          Tədbiriniz üçün lazım olan əsas xidmətləri bir yerdə təqdim edirik.
        </p>

        <div style={styles.servicesGrid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/service/${service.slug}`}
              style={styles.serviceLink}
            >
              <div style={styles.serviceCard}>
                <div
                  style={{
                    ...styles.serviceImage,
                    backgroundImage: `linear-gradient(rgba(12,12,12,0.08), rgba(12,12,12,0.45)), url('${service.banner}')`,
                  }}
                />
                <div style={styles.serviceBody}>
                  <div style={styles.serviceIcon}>{service.icon}</div>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceText}>{service.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <p style={styles.aboutText}>
            AzEvent müxtəlif event xidmətlərini bir platformada birləşdirən
            premium təqdimat həllidir. Məqsədimiz müştərinin axtardığı xidməti
            daha rahat və daha sürətli təqdim etməkdir.
          </p>

          <div style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>✨</div>
              <h3 style={styles.aboutCardTitle}>Premium görünüş</h3>
              <p style={styles.aboutCardText}>
                Müasir, zövqlü və müştərini cəlb edən təqdimat.
              </p>
            </div>

            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>📞</div>
              <h3 style={styles.aboutCardTitle}>Sürətli əlaqə</h3>
              <p style={styles.aboutCardText}>
                Müştəri ilə rahat və birbaşa ünsiyyət imkanı.
              </p>
            </div>

            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>⚡</div>
              <h3 style={styles.aboutCardTitle}>Bir platformada həll</h3>
              <p style={styles.aboutCardText}>
                Event üçün lazım olan əsas xidmətləri bir yerdə tapın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.contactCard}>
          <div style={styles.contactTop}>
            <div>
              <div style={styles.contactBadge}>Əlaqə və sifariş</div>
              <h2 style={styles.contactTitle}>Bizimlə əlaqə saxlayın</h2>
              <p style={styles.contactText}>
                Tədbiriniz üçün uyğun xidməti seçmək, qiymət almaq və sifariş
                vermək üçün aşağıdakı seçimlərdən istifadə edə bilərsiniz.
              </p>
            </div>
          </div>

          <div style={styles.contactInfoGrid}>
            <a href="tel:+994702773533" style={styles.contactInfoLink}>
              <div style={styles.contactInfoBox}>
                <div style={styles.contactInfoLabel}>Telefon</div>
                <div style={styles.contactInfoRow}>
                  <span style={styles.contactInfoIcon}>📞</span>
                  <div style={styles.contactInfoValue}>+994 70 277 35 33</div>
                </div>
              </div>
            </a>

            <a
              href={appConfig.instagramLink}
              target="_blank"
              rel="noreferrer"
              style={styles.contactInfoLink}
            >
              <div style={styles.contactInfoBox}>
                <div style={styles.contactInfoLabel}>Instagram</div>
                <div style={styles.contactInfoRow}>
                  <span style={styles.contactInfoIcon}>📷</span>
                  <div style={styles.contactInfoValue}>Instagram səhifəmiz</div>
                </div>
              </div>
            </a>

            <a href={appConfig.apkLink} download style={styles.contactInfoLink}>
              <div style={styles.contactInfoBox}>
                <div style={styles.contactInfoLabel}>Download</div>
                <div style={styles.contactInfoRow}>
                  <span style={styles.contactInfoIcon}>⬇️</span>
                  <div style={styles.contactInfoValue}>AzEvent APK Yüklə</div>
                </div>
              </div>
            </a>
          </div>

          <div style={styles.contactButtons}>
            <a
              href={appConfig.instagramLink}
              target="_blank"
              rel="noreferrer"
              style={styles.whatsappBtn}
            >
              Instagram-a keç
            </a>

            <a href={appConfig.apkLink} style={styles.viewServicesBtn} download>
              APK yüklə
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLeft}>
            <Link to="/" style={styles.footerBrand}>
              AzEvent
            </Link>
            <p style={styles.footerLine}>
              DJ • Aparıcı • Djembe • Decor • Photo & Video • İcarə
            </p>
            <p style={styles.footerCopy}>
              Premium event xidmətlərini bir platformada təqdim edən müasir həll.
            </p>
          </div>

          <div style={styles.footerRight}>
            <Link to="/services" style={styles.footerNavLink}>
              Xidmətlər
            </Link>
            <Link to="/about" style={styles.footerNavLink}>
              Haqqımızda
            </Link>
            <Link to="/contact" style={styles.footerNavLink}>
              Əlaqə
            </Link>
            <a href={appConfig.apkLink} style={styles.footerNavLink} download>
              APK Yüklə
            </a>
          </div>
        </div>

        <div style={styles.footerBottomLine} />
        <p style={styles.footerBottomCopy}>
          © 2026 AzEvent. Bütün hüquqlar qorunur.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#070707",
    color: "#f5f1e8",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.72)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modalBox: {
    position: "relative",
    width: "100%",
    maxWidth: "620px",
    background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
    border: "1px solid rgba(183,154,98,0.28)",
    borderRadius: "24px",
    padding: "34px 26px 28px 26px",
    textAlign: "center",
    boxShadow: "0 24px 80px rgba(0,0,0,0.40)",
  },
  modalClose: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#d7263d",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "700",
    cursor: "pointer",
  },
  modalEmoji: { fontSize: "54px", marginBottom: "12px" },
  modalTitle: { fontSize: "34px", marginBottom: "14px", color: "#f0e5cc" },
  modalText: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#d1cabd",
    margin: "0 0 12px 0",
  },
  hero: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(8,8,8,0.68), rgba(8,8,8,0.84)), url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroOverlay: {
    minHeight: "100vh",
    padding: "28px 20px 60px 20px",
    background:
      "linear-gradient(90deg, rgba(7,7,7,0.70) 0%, rgba(7,7,7,0.30) 50%, rgba(7,7,7,0.60) 100%)",
  },
  navbar: {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  brandWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textDecoration: "none",
  },
  brandTop: { fontSize: "12px", letterSpacing: "3px", color: "#b79a62" },
  brand: {
    fontSize: "58px",
    fontWeight: "700",
    color: "#e5c98e",
    lineHeight: "1",
    letterSpacing: "1px",
    textShadow: "0 0 16px rgba(181,145,79,0.18)",
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    gap: "42px",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#f0ebe0",
    fontSize: "17px",
  },
  topDownloadBtn: {
    textDecoration: "none",
    color: "#f5ead2",
    border: "1px solid rgba(183,154,98,0.55)",
    borderRadius: "14px",
    padding: "12px 22px",
    backgroundColor: "rgba(255,255,255,0.03)",
    fontSize: "16px",
  },
  heroGrid: {
    maxWidth: "1250px",
    margin: "70px auto 0 auto",
    display: "grid",
    gridTemplateColumns: "1.4fr 0.8fr",
    gap: "28px",
    alignItems: "center",
  },
  leftSide: { padding: "20px 0" },
  smallBadge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(183,154,98,0.10)",
    border: "1px solid rgba(183,154,98,0.20)",
    color: "#c8ab72",
    fontSize: "14px",
    marginBottom: "18px",
  },
  mainTitle: {
    fontSize: "92px",
    lineHeight: "0.95",
    margin: "0 0 18px 0",
    color: "#f2ede3",
    textShadow: "0 0 24px rgba(255,255,255,0.06)",
  },
  mainText: {
    maxWidth: "760px",
    fontSize: "24px",
    lineHeight: "1.7",
    color: "#ddd6c8",
    marginBottom: "30px",
  },
  heroButtons: { display: "flex", gap: "14px", flexWrap: "wrap" },
  whatsappBtn: {
    textDecoration: "none",
    display: "inline-block",
    backgroundColor: "#b48a49",
    color: "#ffffff",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "17px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
  },
  viewServicesBtn: {
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
  downloadCard: {
    background: "rgba(18,18,18,0.72)",
    border: "1px solid rgba(183,154,98,0.24)",
    borderRadius: "28px",
    padding: "34px 28px",
    textAlign: "center",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
    backdropFilter: "blur(6px)",
  },
  downloadIconBox: {
    width: "74px",
    height: "74px",
    borderRadius: "20px",
    margin: "0 auto 18px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#d6b47d",
    backgroundColor: "rgba(183,154,98,0.09)",
    border: "1px solid rgba(183,154,98,0.20)",
  },
  downloadTitle: { fontSize: "36px", marginBottom: "12px", color: "#f3edde" },
  downloadDesc: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#d5cfc2",
    marginBottom: "22px",
  },
  apkBtn: {
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "#c59a56",
    color: "#ffffff",
    padding: "16px 30px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "18px",
    minWidth: "200px",
  },
  downloadInfo: { marginTop: "14px", color: "#a8a094", fontSize: "14px" },
  servicesSection: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "65px 20px 90px 20px",
    textAlign: "center",
  },
  sectionTitle: { fontSize: "46px", marginBottom: "12px", color: "#f0e5cc" },
  sectionSubtitle: {
    fontSize: "18px",
    color: "#c8c1b4",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },
  serviceLink: { textDecoration: "none" },
  serviceCard: {
    backgroundColor: "#101010",
    border: "1px solid rgba(183,154,98,0.18)",
    borderRadius: "22px",
    overflow: "hidden",
    textAlign: "left",
  },
  serviceImage: {
    height: "210px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  serviceBody: { padding: "22px" },
  serviceIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(183,154,98,0.08)",
    marginBottom: "16px",
    fontSize: "25px",
  },
  serviceTitle: { fontSize: "28px", marginBottom: "10px", color: "#f2ebdb" },
  serviceText: { fontSize: "16px", lineHeight: "1.8", color: "#c9c2b6" },
  aboutSection: { backgroundColor: "#0b0b0b", padding: "90px 20px" },
  aboutContainer: { maxWidth: "1250px", margin: "0 auto", textAlign: "center" },
  aboutText: {
    maxWidth: "1100px",
    margin: "0 auto 34px auto",
    color: "#c9c2b6",
    fontSize: "17px",
    lineHeight: "1.9",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },
  aboutCard: {
    backgroundColor: "#111111",
    border: "1px solid rgba(183,154,98,0.14)",
    borderRadius: "20px",
    padding: "22px",
    minHeight: "180px",
  },
  aboutIcon: { fontSize: "28px", marginBottom: "10px" },
  aboutCardTitle: { fontSize: "21px", marginBottom: "10px", color: "#efe5ce" },
  aboutCardText: { color: "#c6c0b6", lineHeight: "1.8", fontSize: "15px" },
  contactSection: {
    maxWidth: "1250px",
    margin: "0 auto",
    textAlign: "center",
    padding: "90px 20px",
  },
  contactCard: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "linear-gradient(180deg, #111111 0%, #171717 100%)",
    border: "1px solid rgba(183,154,98,0.18)",
    borderRadius: "26px",
    padding: "34px 26px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  },
  contactTop: { marginBottom: "24px" },
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
  contactTitle: { fontSize: "40px", margin: "0 0 14px 0", color: "#f0e5cc" },
  contactText: {
    color: "#c9c2b6",
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "28px",
    maxWidth: "820px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactInfoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  },
  contactInfoLink: {
    textDecoration: "none",
  },
  contactInfoBox: {
    backgroundColor: "#0d0d0d",
    border: "1px solid rgba(183,154,98,0.14)",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "left",
    cursor: "pointer",
    minHeight: "110px",
  },
  contactInfoLabel: {
    fontSize: "14px",
    color: "#a79f91",
    marginBottom: "8px",
  },
  contactInfoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  contactInfoIcon: {
    fontSize: "22px",
    lineHeight: "1",
  },
  contactInfoValue: {
    fontSize: "18px",
    color: "#f2ebdb",
    fontWeight: "700",
    lineHeight: "1.5",
  },
  contactButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },
  footer: {
    textAlign: "center",
    padding: "40px 20px 30px 20px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    backgroundColor: "#090909",
  },
  footerInner: {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    flexWrap: "wrap",
  },
  footerLeft: { maxWidth: "620px", textAlign: "left" },
  footerRight: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "left",
  },
  footerBrand: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#e4c990",
    marginBottom: "8px",
    textDecoration: "none",
  },
  footerLine: { color: "#c6c0b5", marginBottom: "10px" },
  footerCopy: {
    color: "#b4ac9f",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },
  footerNavLink: {
    textDecoration: "none",
    color: "#d4ccbe",
    fontSize: "16px",
  },
  footerBottomLine: {
    maxWidth: "1250px",
    margin: "26px auto 16px auto",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  footerBottomCopy: { color: "#8f897d", fontSize: "14px", margin: 0 },
};

export default HomePage;