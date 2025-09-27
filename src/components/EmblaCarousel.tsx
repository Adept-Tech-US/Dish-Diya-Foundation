import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 
import { ChevronLeft, ChevronRight } from "lucide-react"; 

interface EmblaCarouselProps {
  images: string[];
}

const EmblaCarousel = ({ images }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  const handleImageClick = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(images.length - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  return (
    <>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="embla__slide flex-[0_0_100%] min-w-0 relative cursor-pointer"
              onClick={() => handleImageClick(img, idx)}
            >
              <img
                src={img}
                alt={`Carousel image ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-xl max-h-[80vh] p-6 bg-white/90 rounded-lg shadow-xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-semibold">
              Image Preview
            </DialogTitle>
            <DialogClose className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" />
          </DialogHeader>
          <div className="relative">
            {selectedImage && (
              <img
                src={images[currentIndex]}
                alt="Selected image"
                className="w-full h-auto max-h-[60vh] object-contain rounded-md"
              />
            )}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmblaCarousel;
