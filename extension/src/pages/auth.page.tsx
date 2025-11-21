import { AuthLayout } from '@/features/auth/auth-layout';
import { AuthActions } from '@/features/auth/ui';
import { useRegister, useLogin } from '@/features/auth/model';
import { BackButton, Button, Header, Input } from '@/shared/ui';
import { ModalLayout } from '@/shared/ui/modal-layout';
import { Key } from 'akar-icons';
import { useState } from 'react';

const AuthPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authKey, setAuthKey] = useState('');

  const { register } = useRegister();
  const toggleLogin = () => setIsOpen((prev) => !prev);
  const { login } = useLogin();

  const handleLogin = () => {
    if (!authKey.trim()) return;
    login({ authId: authKey });
  };
  return (
    <>
      <AuthLayout
        title="Ваш безопасный цифровой мир"
        description="Быстро. Стабильно. Надежно."
        actions={<AuthActions onRegister={() => register()} onLogin={() => toggleLogin()} />}
      />

      {isOpen && (
        <ModalLayout
          header={<Header title="Вход" left={<BackButton onClick={() => toggleLogin()} />} />}
          children={
            <div className="flex flex-col gap-5">
              <div className="text-base text-center">
                Если у вас уже есть ключ доступа, вы можете войти с его помощью.
              </div>
              <div className="w-full flex flex-col items-center gap-6">
                <Input
                  value={authKey}
                  placeholder="1234-5678-9012-3456"
                  onChange={(e) => setAuthKey(e.target.value)}
                  icon={<Key color="white" size={20} />}
                />
                <Button
                  className="text-base rounded-full h-14 font-medium hover:bg-accent/70 w-full"
                  onClick={() => handleLogin()}
                >
                  Войти
                </Button>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export const Component = AuthPage;
