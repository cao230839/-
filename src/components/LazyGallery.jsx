const images = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
    alt: "城市夜景"
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=60",
    alt: "山间日出"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
    alt: "城市灯光"
  }
];

export default function LazyGallery() {
  return (
    <div className="gallery">
      {images.map(item => (
        <figure key={item.src} className="gallery__item">
          <img loading="lazy" src={item.src} alt={item.alt} />
          <figcaption>{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

