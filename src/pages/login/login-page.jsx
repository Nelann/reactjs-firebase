import { useGoogleLogin } from "@/hooks";

import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { loginWithGoogle } = useGoogleLogin();

  return (
    <section className="max-w-6xl px-4 py-10 mx-auto">
      <div className="mb-3 space-y-2 text-center">
        <h2 className="text-3xl font-bold">ReactJs Firebase</h2>
        <p>Welcome Back!</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <LoginForm />
        </div>
        <p className="text-center">Or</p>
        <Button type="button" onClick={() => loginWithGoogle()}>
          Continue with Google
        </Button>
      </div>
    </section>
  );
}
