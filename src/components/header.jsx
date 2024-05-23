import { Link } from "react-router-dom";

import { useLogout } from "@/hooks";
import { useUser } from "@/hooks";

import { Button } from "./ui/button";

export default function Header() {
  const { user } = useUser();

  const { logout } = useLogout();

  return (
    <header className="sticky top-0 z-30 border-b bg-white/30 backdrop-filter backdrop-blur-md">
      <nav className="flex flex-row items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Home</Link>
        </h1>
        {user ? (
          <div className="flex flex-row items-center space-x-3">
            <Link to="/todos" className="text-lg font-semibold">
              Todos
            </Link>
            <Button onClick={logout} className="">
              Logout
            </Button>
          </div>
        ) : (
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
