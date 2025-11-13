import { Button } from '@/shared/ui';
import { useRegister } from './use-register';
import React, { useState } from 'react';
import { useLogin } from './use-login';

export const AuthForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authKey, setAuthKey] = useState('');
  const { signup, errorMessage } = useRegister();
  const { login } = useLogin();

  const handleOpenLogin = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    if (!authKey.trim()) return;
    login({ user: { authId: authKey } });
  };

  return (
    <div className="flex flex-col gap-3">
      <Button className="text-green-100 text-base" onClick={() => signup()}>
        Я новый пользователь
      </Button>
      <Button
        className="bg-green-700/30 hover:bg-green-500/30 text-green-500 text-base"
        onClick={() => handleOpenLogin()}
      >
        Войти с помощью ключа
      </Button>
      {isOpen && (
        <ModalLayout
          header={
            <div>
              <Button
                className="bg-transparent hover:bg-transparent p-1 h-6 text-green-300/70"
                onClick={() => handleOpenLogin()}
              >
                Назад
              </Button>
            </div>
          }
          title="Введите Ваш ключ"
          description="Если у вас уже есть ключ доступа, вы можете войти с его помощью."
          action={
            <div className="w-full flex flex-col items-center gap-4">
              <AuthInputKey value={authKey} onChange={(e) => setAuthKey(e.target.value)} />
              <Button className="w-full" onClick={() => handleLogin()}>
                Войти
              </Button>
            </div>
          }
        />
      )}
      {errorMessage && (
        <div className="text-red-500">
          {typeof errorMessage === 'string' ? errorMessage : errorMessage}
        </div>
      )}
    </div>
  );
};

interface ModalLayoutProps {
  title: string;
  description: string;
  action: React.ReactNode;
  header?: React.ReactNode;
}

const ModalLayout = ({ header, title, description, action }: ModalLayoutProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-background z-10">
      <div className="flex p-4 items-center justify-center w-full flex-1">
        <div className="flex flex-col justify-between h-full min-h-[300px] w-full">
          <div className="flex flex-col gap-4">
            {header ? header : null}
            <div className="mt-3 flex items-center flex-col gap-2">
              <h1 className="text-2xl font-bold">{title}</h1>
              <span className="text-[14px] text-center text-muted-foreground">{description}</span>
            </div>
          </div>
          {action}
        </div>
      </div>
    </div>
  );
};

interface AuthInputKeyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInputKey = ({ value, onChange }: AuthInputKeyProps) => {
  return (
    <div className="flex flex-col items-start w-full max-w-sm">
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg select-none">
          🔑
        </span>

        <input
          id="authKey"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="1234-5678-9012-3456"
          className="w-full h-12 pl-10 pr-4 py-3 rounded-2xl border border-gray-700 bg-background/50 
                     text-gray-100 placeholder-gray-500 
                     focus:border-white focus:ring-2 focus:ring-white/40 
                     outline-none transition-all"
        />
      </div>
    </div>
  );
};
