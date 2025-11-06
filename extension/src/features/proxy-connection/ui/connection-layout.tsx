interface ConnectionLayoutProps {
  status: React.ReactNode;
  control: React.ReactNode;
}

export const ConnectionLayout = ({
  status,
  control,
}: ConnectionLayoutProps) => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-end p-4 overflow-hidden">
      <div className="h-full w-full overflow-hidden rounded-b-3xl ">
        <div className="relative w-full flex h-full ">
          {status}
          {control}
        </div>
      </div>
    </section>
  );
};
