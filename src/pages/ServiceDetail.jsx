import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { services, appConfig } from "../data/services";

function ServiceDetail() {
  const { slug } = useParams();

  const service = useMemo(
    () => services.find((item) => item.slug === slug),
    [slug]
  );

  if (!service) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <Link to="/" style={styles.backLink}>
            ← Ana səhifəyə qayıt
          </Link>
          <h1 style={styles.title}>Xidmət tapılmadı</h1>
        </div>
      </div>
    );
  }

  const galleryBySlug = {
    dj: [
      "/djs/dj_china.jpg",
      "/djs/djorhanoguz.jpg",
      "/djs/dj_geo_amina.jpg",
      "/djs/dj_rash.jpg",
      "/djs/dj_kamo.jpg",
      "/djs/dj_zeo_naxcivan.jpg",
      "/djs/dj_medet.jpg",
      "/djs/dj_arkani.jpg",
    ],

    darbuka: [
      "/darbuka/darbuka1.jpg",
      "/darbuka/darbuka2.jpg",
      "/darbuka/darbuka3.jpg",
      "/darbuka/darbuka4.jpg",
      "/darbuka/darbuka5.jpg",
    ],
  };

  const activeGallery = galleryBySlug[service.slug] || service.gallery;
  const loopedGallery = [...activeGallery, ...activeGallery];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/" style={styles.backLink}>
          ← Ana səhifəyə qayıt
        </Link>

        <div style={styles.topCard}>
          <div
            style={{
              ...styles.topBanner,
              backgroundImage: `linear-gradient(rgba(10,10,10,0.18), rgba(10,10,10,0.45)), url('${service.banner}')`,
            }}
          />

          <div style={styles.topContent}>
            <div style={styles.icon}>{service.icon}</div>
            <h1 style={styles.title}>{service.title}</h1>
            <p style={styles.description}>{service.description}</p>

            <div style={styles.buttonRow}>
              <a href={appConfig.apkLink} style={styles.primaryButton} download>
                AzEvent proqramını endirin
              </a>

              <a
                href={appConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryButton}
              >
                WhatsApp ilə əlaqə
              </a>
            </div>
          </div>
        </div>

        <div style={styles.sliderSection}>
          <h2 style={styles.sliderTitle}>{service.title} seçimləri</h2>

          <div style={styles.marqueeOuter}>
            <div style={styles.marqueeTrack}>
              {loopedGallery.map((image, index) => (
                <div key={index} style={styles.smallCard}>
                  <div
                    style={{
                      ...styles.smallImage,
                      backgroundImage: `url('${image}')`,
                    }}
                  />
                </div>
              ))}
            </div>
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
    padding: "36px 20px 60px 20px",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-block",
    marginBottom: "20px",
    color: "#d7c49a",
    textDecoration: "none",
    fontSize: "16px",
  },
  topCard: {
    backgroundColor: "#101010",
    border: "1px solid rgba(183,154,98,0.18)",
    borderRadius: "24px",
    overflow: "hidden",
    marginBottom: "34px",
  },
  topBanner: {
    height: "220px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  topContent: {
    padding: "28px 24px 30px 24px",
    textAlign: "center",
  },
  icon: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "16px",
    color: "#f0e5cc",
  },
  description: {
    maxWidth: "900px",
    margin: "0 auto 24px auto",
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#d1cabd",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },
  primaryButton: {
    textDecoration: "none",
    display: "inline-block",
    backgroundColor: "#b48a49",
    color: "#ffffff",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "16px",
  },
  secondaryButton: {
    textDecoration: "none",
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.03)",
    color: "#f2ede2",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "16px",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  sliderSection: {
    textAlign: "center",
  },
  sliderTitle: {
    fontSize: "32px",
    marginBottom: "22px",
    color: "#f0e5cc",
  },
  marqueeOuter: {
    overflow: "hidden",
    width: "100%",
    padding: "8px 0",
  },
  marqueeTrack: {
    display: "flex",
    gap: "18px",
    width: "max-content",
    animation: "scrollLeft 28s linear infinite",
  },
  smallCard: {
    width: "230px",
    minWidth: "230px",
    backgroundColor: "#111111",
    border: "1px solid rgba(183,154,98,0.18)",
    borderRadius: "18px",
    padding: "10px",
  },
  smallImage: {
    width: "100%",
    height: "160px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default ServiceDetail;