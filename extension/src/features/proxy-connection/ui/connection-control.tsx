import { useNavigate } from 'react-router-dom';
import { useProxyConnection } from '../model/proxy-connection-provider';
import { Button, FlagInfo } from '@/shared/ui';
import { ChevronRight } from 'akar-icons';

export const ConnectionControl = () => {
  const navigate = useNavigate();
  const { proxy, isPending, errorMessage } = useProxyConnection();

  const handleOpenList = () => {
    navigate({
      pathname: '/proxy-list',
    });
  };
  return (
    <div className="absolute bottom-0 w-full rounded-4xl p-4 flex flex-col gap-6 z-10 transition-all duration-500">
      <div className="bg-secondary rounded-3xl p-4 flex flex-row justify-between">
        {isPending ? (
          <FlagInfo country="Загрузка..." tag="" city="Москва" />
        ) : errorMessage ? (
          <FlagInfo country={errorMessage} tag="" city={errorMessage} />
        ) : (
          <FlagInfo
            country={proxy?.geolocation?.country || ''}
            tag={proxy?.geolocation?.tag || ''}
            city={proxy?.geolocation?.city || ''}
          />
        )}
        <Button
          className="bg-transparent hover:bg-transparent p-1"
          onClick={() => handleOpenList()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
