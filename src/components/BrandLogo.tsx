const BrandLogo = () => (
  <span className="brand-logo" aria-hidden="true">
    <span className="brand-mark">
      <svg viewBox="0 0 64 64" focusable="false">
        <path d="M50 17 39 9H25L13 19v26l12 10h14l12-10v-8" className="brand-glyph brand-glyph-c" />
        <path d="M23 17v30M23 37 43 16M31 29l14 18" className="brand-glyph brand-glyph-k" />
        <path d="m31 3 25 13v32L31 61 6 48V16Z" className="brand-crest" />
      </svg>
    </span>
    <span className="brand-wordmark">Kauam Costa</span>
  </span>
);

export default BrandLogo;
