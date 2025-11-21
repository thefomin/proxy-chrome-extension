import { useSession } from '@/shared/model/session-provider';
import { FlagInfo } from '@/shared/ui';

interface ListItemProps {
  id: string;
  onClick: (id: string) => void;
  country: string;
  tag: string;
  city: string;
}

export const ListItem = ({ onClick, id, country, tag, city }: ListItemProps) => {
  const { session } = useSession();
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className="flex items-center cursor-pointer hover:bg-muted/10 px-4 py-4 gap-2 bg-card rounded-full justify-between"
    >
      <FlagInfo country={country} tag={tag} city={city} className="transition-all duration-500" />
      {session?.proxyId === id ? (
        <span className="w-4 h-4 bg-accent rounded-full mr-2 transition-all duration-500" />
      ) : (
        <span className="w-4 h-4 bg-[#5A5C61] rounded-full mr-2 transition-all duration-500" />
      )}
    </div>
  );
};
