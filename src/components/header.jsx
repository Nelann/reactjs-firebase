import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex flex-row h-16 items-center justify-between max-w-6xl mx-auto px-4">
        <h1 className="font-semibold text-2xl">
          <Link to="/">Home</Link>
        </h1>
        <div className="flex flex-row space-x-3">
          <Link to="/posts" className="font-semibold text-lg">
            Posts
          </Link>
        </div>
      </nav>
    </header>
  );
}
