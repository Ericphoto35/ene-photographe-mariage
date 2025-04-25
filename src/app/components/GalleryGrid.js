'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden aspect-[3/4] cursor-pointer group"
            onClick={() => openLightbox(image, index)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-medium">{image.title}</h3>
              {image.location && (
                <p className="text-sm text-white/80">{image.location}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={closeLightbox}
          >
            <FiX size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <FiChevronLeft size={28} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <FiChevronRight size={28} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-medium">{selectedImage.title}</h3>
              {selectedImage.location && (
                <p className="text-sm text-white/80">{selectedImage.location}</p>
              )}
              {selectedImage.description && (
                <p className="mt-2 text-sm">{selectedImage.description}</p>
              )}
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                  setSelectedImage(images[idx]);
                }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryGrid;
