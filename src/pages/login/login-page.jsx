import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <section>
      <div className="text-center mb-3 space-y-2">
        <h2 className="font-bold text-3xl">ReactJs Firebase</h2>
        <p>Welcome Back!</p>
      </div>
      <div>
        <LoginForm />
      </div>
    </section>
  );
}
