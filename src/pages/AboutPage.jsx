import { Link } from "react-router-dom";

function AboutPage() {
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
          <Link to="/contact" style={styles.navLink}>
            Əlaqə
          </Link>
        </div>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.title}>Haqqımızda</h1>

        <p style={styles.text}>
          AzEvent müxtəlif event xidmətlərini bir platformada birləşdirən müasir
          və premium təqdimat həllidir. Məqsədimiz müştərilərə DJ, aparıcı,
          djembe, dekor, foto-video və digər tədbir xidmətlərini daha rahat,
          daha sürətli və daha peşəkar şəkildə təqdim etməkdir.
          <br />
          <br />
          Biz inanırıq ki, hər tədbir xüsusi yanaşma tələb edir. Məhz buna görə
          AzEvent platformasında həm xidmət keyfiyyəti, həm də təqdimat görnüşü
          ön planda saxlanılır. Müştəri axtardığı xidməti bir yerdə görə,
          seçimləri ilə tanış ola, ətraflı məlumat əldə edə və rahat şəkildə
          birbaşa əlaqəyə keçə bilir.
          <br />
          <br />
          AzEvent-in əsas məqsədi tədbir sahəsində xidmət axtaran insanlarla
          professional xidmət göstərən şəxsləri daha rahat şəkildə bir araya
          gətirməkdir. Platformamız vasitəsilə istifadəçilər fərqli xidmət
          növlərini bir yerdə görə bilir və öz tədbirlərinə uyğun həlli daha
          sürətli seçirlər.
          <br />
          <br />
          Biz sadəcə xidmət siyahısı təqdim etmirik. AzEvent eyni zamanda
          müasir, etibarlı və premium yanaşmanı əks etdirən bir platformadır.
          Hədəfimiz istifadəçilərə daha rahat seçim imkanı yaratmaq, xidmət
          sahiblərinə isə öz işlərini daha professional şəkildə təqdim etməyə
          kömək etməkdir.
          <br />
          <br />
          AzEvent ilə tədbirinizi planlamaq daha rahat, xidmət seçimi isə daha
          aydın və daha sürətli olur.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>✨</div>
            <h3 style={styles.cardTitle}>Premium görünüş</h3>
            <p style={styles.cardText}>
              Müasir, zövqlü və müştəridə etibar yaradan təqdimat görnüşü ilə
              xidmətlər daha professional şəkildə təqdim olunur.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>📞</div>
            <h3 style={styles.cardTitle}>Sürətli əlaqə</h3>
            <p style={styles.cardText}>
              Müştərilər WhatsApp və digər əlaqə vasitələri ilə rahat şəkildə
              birbaşa əlaqəyə keçə və sifariş prosesi ilə tanış ola bilirlər.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>⚡</div>
            <h3 style={styles.cardTitle}>Bir platformada həll</h3>
            <p style={styles.cardText}>
              Event üçün lazım olan əsas xidmətləri bir yerdə toplamaqla seçim
              prosesi daha rahat, daha sürətli və daha aydın olur.
            </p>
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
  title: {
    fontSize: "52px",
    marginBottom: "18px",
    color: "#f0e5cc",
  },
  text: {
    maxWidth: "980px",
    fontSize: "19px",
    lineHeight: "1.9",
    color: "#c9c2b6",
    marginBottom: "34px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },
  card: {
    backgroundColor: "#111111",
    border: "1px solid rgba(183,154,98,0.14)",
    borderRadius: "20px",
    padding: "22px",
    minHeight: "180px",
  },
  icon: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "21px",
    marginBottom: "10px",
    color: "#efe5ce",
  },
  cardText: {
    color: "#c6c0b6",
    lineHeight: "1.8",
    fontSize: "15px",
  },
};

export default AboutPage;