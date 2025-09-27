import { Card } from './ui/card';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock social media posts - in production, these would come from APIs
const socialPosts = [
  {
    id: 1,
    platform: "Instagram",
    icon: Instagram,
    username: "@dishdiyafoundation",
    content:
      "Today we celebrated the opening of our 5th community center! Thank you to all our supporters who made this possible. 🎉 #CommunityDevelopment #SriLanka",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=400&fit=crop",
    likes: 245,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    platform: "Facebook",
    icon: Facebook,
    username: "Dishdiya Foundation",
    content:
      "Our clean water project has now reached 10 villages! Access to clean water is a basic human right, and we're committed to making it a reality for all.",
    image:
      "https://images.unsplash.com/photo-1546531130-0f36255d9d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW4lMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D?w=400&h=400&fit=crop",
    likes: 512,
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    platform: "Twitter",
    icon: Twitter,
    username: "@DishdiyaOrg",
    content:
      "Education transforms lives. We're proud to announce that 100% of students in our education program passed their exams this year! 📚✨",
    Image: "https://images.unsplash.com/photo-1698993082050-19ca94c62fb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 189,
    timestamp: "1 day ago",
  },
  {
    id: 4,
    platform: "LinkedIn",
    icon: Linkedin,
    username: "Dishdiya Foundation",
    content:
      "We're looking for passionate volunteers to join our upcoming healthcare camp. Your skills can make a difference in someone's life.",
    likes: 98,
    timestamp: "2 days ago",
  },
  {
    id: 5,
    platform: "Instagram",
    icon: Instagram,
    username: "@dishdiyafoundation",
    content:
      "The smiles say it all! Our youth sports program is bringing joy and healthy activities to communities across Sri Lanka. 🏃‍♂️🏃‍♀️",
    image:
      "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=400&fit=crop",
    likes: 367,
    timestamp: "3 days ago",
  },
  {
    id: 6,
    platform: "Facebook",
    icon: Facebook,
    username: "Dishdiya Foundation",
    content:
      "Thank you to our amazing team of volunteers who dedicated their weekend to renovating the local school. Together, we're building a brighter future!",
    image:
      "https://images.unsplash.com/photo-1491439833076-514a03b24a15?w=400&h=400&fit=crop",
    likes: 623,
    timestamp: "4 days ago",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our journey and impact through social media
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post) => {
            const Icon = post.icon;
            return (
              <Card
                key={post.id}
                className="hover:shadow-luxury transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">{post.username}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                  
                  {post.image && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Social media post"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <p className="text-sm text-foreground mb-3 line-clamp-3">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-sm">❤️ {post.likes}</span>
                    <span className="text-xs">{post.platform}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;