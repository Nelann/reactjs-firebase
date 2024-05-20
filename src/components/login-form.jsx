import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { useGithubLogin, useGoogleLogin, useLogin } from "@/hooks";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLogin();
  const { loginWithGoogle } = useGoogleLogin();
  const { loginWithGithub } = useGithubLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    await login({ email, password });
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
            SignIn
          </Button>
        </div>
        <div>
          Don&apos;t have an account?{" "}
          <span className="font-semibold">
            <Link to="/register">Register here.</Link>
          </span>
        </div>
        <p className="text-center">Or</p>
        <div className="flex flex-col gap-3">
          <Button type="button" onClick={() => loginWithGoogle()}>
            Continue with Google
          </Button>
          <Button type="button" onClick={() => loginWithGithub()}>
            Continue with GitHub
          </Button>
        </div>
      </div>
    </form>
  );
}
