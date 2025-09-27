import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const DreamSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop', alt: 'Community support' },
    { id: 2, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=300&h=300&fit=crop', alt: 'Education program' },
    { id: 3, src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=300&h=300&fit=crop', alt: 'Women empowerment' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=300&h=300&fit=crop', alt: 'Youth sports' },
    { id: 5, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop', alt: 'Family support' },
    { id: 6, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop', alt: 'Healthcare' },
    { id: 7, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop', alt: 'Volunteers' },
    { id: 8, src: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=300&h=300&fit=crop', alt: 'Sports program' },
    { id: 9, src: 'https://images.unsplash.com/photo-1497486571060-62a1a308752b?w=300&h=300&fit=crop', alt: 'Team building' },
    { id: 10, src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=300&h=300&fit=crop', alt: 'Community gathering' },
    { id: 11, src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop', alt: 'Success stories' },
    { id: 12, src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=300&h=300&fit=crop', alt: 'Youth programs' }
  ];

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  const getRandomPosition = (index: number) => {
    const positions = [
      { top: '10%', left: '5%' },
      { top: '5%', left: '35%' },
      { top: '15%', left: '65%' },
      { top: '8%', right: '10%' },
      { top: '35%', left: '8%' },
      { top: '40%', left: '38%' },
      { top: '38%', right: '25%' },
      { top: '35%', right: '5%' },
      { bottom: '25%', left: '5%' },
      { bottom: '20%', left: '30%' },
      { bottom: '25%', right: '35%' },
      { bottom: '20%', right: '8%' }
    ];
    return positions[index] || positions[0];
  };

  const getRandomDelay = () => Math.random() * 2;

  return (
    <section className="relative py-32 overflow-hidden bg-background min-h-screen">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-60">
        {images.map((image, index) => {
          const position = getRandomPosition(index);
          return (
            <div
              key={image.id}
              className={`absolute rounded-xl overflow-hidden shadow-lg transition-all duration-1000 hover:scale-110 hover:z-10 ${
                imagesLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                ...position,
                animationDelay: `${getRandomDelay()}s`,
                width: index % 3 === 0 ? '160px' : index % 3 === 1 ? '140px' : '120px',
                height: index % 3 === 0 ? '160px' : index % 3 === 1 ? '140px' : '120px',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8">
            <span className="text-primary">THOUSANDS</span><br />
            <span className="text-muted-foreground/60">OF</span>{' '}
            <span className="text-primary">PEOPLE</span><br />
            <span className="text-muted-foreground/60">ARE</span>{' '}
            <span className="text-secondary">LIVING</span><br />
            <span className="text-muted-foreground/60">THEIR</span>{' '}
            <span className="text-secondary">DREAM.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Chase what's yours,<br />
            become someone proud.
          </p>

          <Button variant="luxury" size="lg" className="group">
            Join The Movement
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;