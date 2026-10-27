import React, { useEffect } from 'react';

export default function LightboxModal({ isOpen, onClose, imageSrc, imageAlt }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt || 'Pratinjau Gambar'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white pb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed text-[22px]">image</span>
            <span className="font-label-md text-sm font-semibold truncate max-w-[280px] sm:max-w-md">
              {imageAlt || 'Pratinjau Gambar Brosur'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              title="Download gambar resolusi penuh"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span className="hidden sm:inline">Simpan</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Tutup (Esc)"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative bg-surface-container-lowest/5 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-2">
          <img
            src={imageSrc}
            alt={imageAlt || 'Pratinjau Gambar'}
            className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
