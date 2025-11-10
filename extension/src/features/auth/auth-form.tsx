import { Button } from '@/shared/ui';
import { useRegister } from './use-register';
import { SetStateAction, useState } from 'react';

export const AuthForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signup, errorMessage } = useRegister();

  const handleOpenLogin = () => {
    setIsOpen(!isOpen);
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
          title="asdasda"
          description="dasdasdasd"
          action={<div></div>}
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
          {header ? header : null}
          <div className="mt-4 flex items-center flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            <span className="text-[14px]">{description}</span>
          </div>
          {action}
        </div>
      </div>
    </div>
  );
};

const AuthInputKey = () => {
  return <div></div>;
};
