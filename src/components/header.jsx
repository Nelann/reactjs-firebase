import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/30 backdrop-filter backdrop-blur-md">
      <nav className="flex flex-row items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Home</Link>
        </h1>
        <div className="flex flex-row space-x-3">
          <Link to="/todos" className="text-lg font-semibold">
            Todos
          </Link>
        </div>
      </nav>
    </header>
  );
}
