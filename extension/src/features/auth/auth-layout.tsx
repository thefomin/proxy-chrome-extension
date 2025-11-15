import CircleSvg from './ui/svg-icon';

interface AuthLayoutProps {
  title: string;
  description: React.ReactNode;
  actions: React.ReactNode;
}

export const AuthLayout = ({ title, description, actions }: AuthLayoutProps) => {
  return (
    <section className="flex p-4 items-center justify-center w-[390px] flex-1 h-full relative">
      <div className="flex flex-col justify-end gap-16 h-full min-h-[300px] w-full">
        <div className="absolute left-0 -top-5 z-0 items-center flex justify-center blur-sm">
          <div className="scale-110 animation-spin">
            <CircleSvg />
          </div>
        </div>
        <div className="mt-4 flex items-center flex-col gap-4">
          <h1 className="text-3xl font-semibold z-10 w-64 text-center">{title}</h1>
          <span className="text-base z-10">{description}</span>
        </div>
        {actions}
      </div>
    </section>
  );
};
