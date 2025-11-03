import { Button } from "@/shared/ui";

const SigninPage = () => {
  return (
    <div className="flex p-4 items-center justify-center w-full flex-1">
      <div className="flex flex-col justify-between h-full min-h-[300px] w-full">
        <div className="items-center flex justify-center">Logo</div>
        <div className="mt-4 flex items-center flex-col">
          <h1 className="text-2xl font-bold">Добро пожаловать</h1>
          <span className="text-[14px]">
            Сервис, обеспечивающий высокую скорость и безопасность
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Button className="text-green-100 text-base">
            Я новый пользователь
          </Button>
          <Button className="bg-green-700/30 hover:bg-green-500/30 text-green-500 text-base">
            Войти с помощью ключа
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Component = SigninPage;
