import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('foundation-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Our Story in Motion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we're transforming communities across Sri Lanka
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-luxury group">
            {/* Video */}
            <video
              id="foundation-video"
              className="w-full aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={handlePlayPause}
                size="lg"
                className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-primary shadow-xl"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </Button>
            </div>

            {/* Video Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Making a Difference Together</h3>
              <p className="text-white/80">5 years of impact • 100,000+ lives changed</p>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { label: 'Communities Reached', value: '50+' },
              { label: 'Volunteer Hours', value: '10,000+' },
              { label: 'Projects Completed', value: '100+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-background rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-secondary mb-1">{stat.value}</h4>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;