import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface ImageViewerProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsFullscreen(false); // Reset fullscreen state when dialog opens/closes
  }, [initialIndex, isOpen]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    },
    [handlePrevious, handleNext, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`p-0 overflow-hidden ${isFullscreen ? 'fixed inset-0 w-screen h-screen max-w-none rounded-none' : 'sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px]'}`}

      >
        <VisuallyHidden.Root>
          <DialogTitle>Image Viewer</DialogTitle>
        </VisuallyHidden.Root>
        <div className={`relative w-full flex items-center justify-center bg-black ${isFullscreen ? 'h-full' : 'h-[500px]'}`}>
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
          <Button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <Button
            className="absolute top-2 right-14 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full"
            onClick={handleToggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-6 w-6" /> : <Maximize2 className="h-6 w-6" />}
          </Button>
          <Button
            className="absolute top-2 right-2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm bg-black/50 py-1">
          {currentIndex + 1} / {images.length}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;