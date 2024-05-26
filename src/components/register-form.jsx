import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { useRegister } from "@/hooks";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    register(
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="johndoe"
            className="p-3 border rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
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
            SignUp
          </Button>
        </div>
        <div>
          Already have an account?{" "}
          <span className="font-semibold">
            <Link to="/login">Login here.</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
