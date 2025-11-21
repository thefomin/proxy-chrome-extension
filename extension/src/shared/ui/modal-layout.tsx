import { Portal } from './portal';

interface ModalLayoutProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const ModalLayout = ({ header, children }: ModalLayoutProps) => {
  return (
    <Portal>
      <div className="absolute top-0 left-0 w-full h-full bg-background z-10">
        {header}
        <div className="flex pt-16 p-4 items-center justify-center w-full flex-1 h-full">
          <div className="flex flex-col mt-[50%] h-full w-full">{children}</div>
        </div>
      </div>
    </Portal>
  );
};
