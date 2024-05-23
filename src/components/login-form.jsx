import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "@/hooks";

import { Button } from "./ui/button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    await login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="p-3 border rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border rounded-md"
          />
        </div>
        <div>
          <Button type="submit" className="w-full">
            {isPending ? "Loggining..." : "Login"}
          </Button>
        </div>
        <div>
          Don&apos;t have an account?{" "}
          <span className="font-semibold">
            <Link to="/register">Register here.</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
