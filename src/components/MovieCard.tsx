interface MovieCardProps {
  title: string;
  imageUrl: string;
}

const MovieCard = ({ title, imageUrl }: MovieCardProps) => {
  return (
    <div className="min-w-[200px] md:min-w-[250px] group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10">
      <div className="relative overflow-hidden rounded">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[120px] md:h-[140px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-sm font-semibold truncate">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
