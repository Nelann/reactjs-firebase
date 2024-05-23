import { useGoogleLogin } from "@/hooks";

import RegisterForm from "@/components/register-form";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const { loginWithGoogle } = useGoogleLogin();

  return (
    <section>
      <div className="mb-3 space-y-2 text-center">
        <h2 className="text-3xl font-bold">ReactJs Firebase</h2>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <RegisterForm />
        </div>
        <p className="text-center">Or</p>
        <Button type="button" onClick={() => loginWithGoogle()}>
          Continue with Google
        </Button>
      </div>
    </section>
  );
}
