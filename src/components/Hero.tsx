import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80"
          alt="Featured content"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Stranger Things
        </h1>
        <p className="text-base md:text-lg mb-6 text-muted-foreground">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8">
            <Play className="mr-2 h-5 w-5" fill="currentColor" />
            Play
          </Button>
          <Button variant="secondary" className="bg-muted/50 hover:bg-muted/70 font-semibold px-8">
            <Info className="mr-2 h-5 w-5" />
            More Info
          </Button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
