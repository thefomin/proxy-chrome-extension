import { Button } from '@/shared/ui';

interface AuthActionsProps {
  onRegister: () => void;
  onLogin: () => void;
}

export const AuthActions = ({ onRegister, onLogin }: AuthActionsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Button
        className="text-base rounded-full h-14 font-medium hover:bg-accent/70"
        onClick={onRegister}
      >
        Попробовать сейчас
      </Button>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="text-base">У вас уже есть аккаунт?</div>
        <Button
          className="bg-trasparent hover:bg-trasparent text-base font-medium h-7 text-accent p-0 hover:text-accent/70"
          onClick={onLogin}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};
