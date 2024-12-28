const Gallery = () => {
  return (
    <div className="gallery-container p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Gallery of Cuts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="gallery-item">
          <img src="/images/cut1.webp" alt="Corte 1" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        <div className="gallery-item">
          <img src="/images/cut2.jpg" alt="Corte 2" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        <div className="gallery-item">
          <img src="/images/cut3.webp" alt="Corte 3" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        <div className="gallery-item">
          <img src="/images/cut4.jpg" alt="Corte 4" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
