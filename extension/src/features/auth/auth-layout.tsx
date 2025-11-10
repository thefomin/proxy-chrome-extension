interface AuthLayoutProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}

export const AuthLayout = ({ logo, title, description, action }: AuthLayoutProps) => {
  return (
    <div className="flex p-4 items-center justify-center w-full flex-1">
      <div className="flex flex-col justify-between h-full min-h-[300px] w-full">
        <div className="items-center flex justify-center">{logo}</div>
        <div className="mt-4 flex items-center flex-col">
          <h1 className="text-2xl font-bold">{title}</h1>
          <span className="text-[14px]">{description}</span>
        </div>
        {action}
      </div>
    </div>
  );
};
