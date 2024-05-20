import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <section className="my-10">
      <div className="mb-3 space-y-2 text-center">
        <h2 className="text-3xl font-bold">ReactJs Firebase</h2>
        <p>Welcome Back!</p>
      </div>
      <div>
        <LoginForm />
      </div>
    </section>
  );
}
