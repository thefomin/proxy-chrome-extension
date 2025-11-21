import { useProxyConnection } from '@/features/proxy-connection/model/proxy-connection-provider';
import { ListItem, ListLayout } from '@/features/proxy-list/ui';
import { useProxy } from '@/features/proxy-list/model/use-proxy';
import { Button, Header } from '@/shared/ui';
import { ChevronLeft } from 'akar-icons';
import { useNavigate } from 'react-router-dom';

const ProxyListPage = () => {
  const navigate = useNavigate();
  const { proxy } = useProxy();
  const { setProxyParamsId } = useProxyConnection();

  const handleSelectProxy = (id: string) => {
    setProxyParamsId(id);
  };

  const hadleToBack = () => {
    navigate({
      pathname: '/',
    });
  };

  return (
    <ListLayout
      tab={
        <Header
          title="Локации"
          left={
            <Button
              className="bg-transparent hover:bg-transparent text-3xl p-1 absolute left-4"
              onClick={hadleToBack}
            >
              <ChevronLeft />
            </Button>
          }
        />
      }
      list={
        <>
          {proxy?.map((p) => (
            <ListItem
              key={p.id}
              id={p.id}
              country={p.geolocation?.country || ''}
              tag={p.geolocation?.tag || ''}
              city={p.geolocation?.city || ''}
              onClick={() => handleSelectProxy(p.id)}
            />
          ))}
        </>
      }
    />
  );
};

export const Component = ProxyListPage;
