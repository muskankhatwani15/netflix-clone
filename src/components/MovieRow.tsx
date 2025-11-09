import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  return (
    <div className="px-4 md:px-16 mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex gap-2 overflow-x-scroll movie-row pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} imageUrl={movie.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
