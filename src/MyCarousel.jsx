import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const slides = [
  {
    img: "https://picsum.photos/900/400?random=1",
    title: "Slide uno",
    desc: "Una bellissima immagine casuale.",
  },
  {
    img: "https://picsum.photos/900/400?random=2",
    title: "Slide due",
    desc: "Un'altra fantastica immagine.",
  },
  {
    img: "https://picsum.photos/900/400?random=3",
    title: "Slide tre",
    desc: "L'ultima, ma non meno bella.",
  },
];

function MyCarousel() {
  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicatori pallini */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div key={i} className={`carousel-item${i === 0 ? " active" : ""}`}>
              <img
                src={slide.img}
                className="d-block w-100"
                alt={slide.title}
                style={{ objectFit: "cover", height: "400px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    display: "inline-block",
                  }}
                >
                  <h5 style={{ fontWeight: "700", letterSpacing: "1px" }}>{slide.title}</h5>
                  <p style={{ marginBottom: 0 }}>{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frecce */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default MyCarousel;