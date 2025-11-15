interface HeaderProps {
  left?: React.ReactNode;
  title: string;
}

export const Header = ({ left, title }: HeaderProps) => {
  return (
    <header className="absolute flex items-center p-4 no-scrollbar w-full">
      {left}
      <h1 className="w-full text-center text-2xl font-medium">{title}</h1>
    </header>
  );
};
