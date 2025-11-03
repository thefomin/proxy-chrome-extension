interface ConnectionLayoutProps {
  status: React.ReactNode;
  control: React.ReactNode;
}

export const ConnectionLayout = ({
  status,
  control,
}: ConnectionLayoutProps) => {
  return (
    <section className="p-4 flex flex-col h-screen justify-end">
      {status}
      {control}
    </section>
  );
};
