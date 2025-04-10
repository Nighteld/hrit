import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router";

export default function Login() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <img src="../../public/logo.png" alt="" />
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
