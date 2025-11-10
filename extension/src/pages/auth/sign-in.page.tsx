import { AuthForm } from "@/features/auth/auth-form";
import { AuthLayout } from "@/features/auth/auth-layout";

const SigninPage = () => {
  return (
    <AuthLayout 
      logo={<div>logo</div>} 
      title="Добро пожаловать" 
      description="Сервис, обеспечивающий высокую скорость и безопасность" 
      action={<AuthForm/>}
    />
  );
};

export const Component = SigninPage;
