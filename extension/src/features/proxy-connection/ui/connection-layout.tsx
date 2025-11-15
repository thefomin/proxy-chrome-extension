interface ConnectionLayoutProps {
  tab: React.ReactNode;
  switcher: React.ReactNode;
  connection: React.ReactNode;
}

export const ConnectionLayout = ({ tab, switcher, connection }: ConnectionLayoutProps) => {
  return (
    <>
      {tab}
      <section className="w-[390px] pt-16 pb-28 flex flex-col p-4 overflow-hidden gap-4 items-center justify-center h-full">
        <div className="w-full flex flex-col p-4 gap-2 rounded-3xl overflow-scroll no-scrollbar">
          {switcher}
        </div>
      </section>
      {connection}
    </>
  );
};
