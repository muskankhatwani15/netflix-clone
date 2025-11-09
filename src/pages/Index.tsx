import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import { trendingMovies, popularMovies, actionMovies, comedyMovies } from "@/data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Movie Rows */}
      <div className="relative -mt-32 z-10 space-y-8 pb-16">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
        <MovieRow title="Action Thrillers" movies={actionMovies} />
        <MovieRow title="Comedies" movies={comedyMovies} />
      </div>
    </div>
  );
};

export default Index;
