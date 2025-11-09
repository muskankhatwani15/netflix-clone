import { Search, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-background to-transparent px-4 md:px-16 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-primary text-2xl md:text-3xl font-bold">NETFLIX</h1>
          
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-muted-foreground transition">Home</a>
            <a href="#" className="hover:text-muted-foreground transition">TV Shows</a>
            <a href="#" className="hover:text-muted-foreground transition">Movies</a>
            <a href="#" className="hover:text-muted-foreground transition">New & Popular</a>
            <a href="#" className="hover:text-muted-foreground transition">My List</a>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-muted-foreground transition" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-muted-foreground transition" />
          <div className="w-8 h-8 bg-primary rounded cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
