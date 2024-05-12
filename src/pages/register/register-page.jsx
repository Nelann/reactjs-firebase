import RegisterForm from "@/components/register-form";

export default function RegisterPage() {
  return (
    <section>
      <div className="text-center mb-3 space-y-2">
        <h2 className="font-bold text-3xl">ReactJs Firebase</h2>
      </div>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
}
