interface ListLayoutProps {
  tab: React.ReactNode;
  list: React.ReactNode;
}

export const ListLayout = ({ tab, list }: ListLayoutProps) => {
  return (
    <>
      {tab}
      <section className="w-[390px] pt-16 pb-28 flex flex-col p-4 overflow-hidden gap-4 items-center justify-end h-full">
        <div className="w-full flex flex-col p-4 bg-secondary gap-2 rounded-3xl overflow-scroll no-scrollbar">
          {list}
        </div>
      </section>
    </>
  );
};
