import { ChevronLeft } from 'akar-icons';
import { Button } from './button';

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <Button
      className="bg-transparent hover:bg-transparent text-3xl p-1 absolute left-4"
      onClick={onClick}
    >
      <ChevronLeft />
    </Button>
  );
};
