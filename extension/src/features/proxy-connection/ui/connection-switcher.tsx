import { useProxyConnection } from '@/features/proxy-connection/model/proxy-connection-provider';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui';

export const ConnectionSwitcher = () => {
  const { isConnected, connectProxy, disconnectProxy } = useProxyConnection();

  return (
    <div className="flex items-center justify-center w-full flex-col gap-5">
      <h1 className="text-2xl font-semibold text-white">
        {isConnected ? 'ПОДКЛЮЧЕН' : 'ОТКЛЮЧЕН'}
      </h1>
      <Button
        className={cn(
          'relative w-40 h-20 rounded-full transition-colors duration-300 hover:none',
          isConnected ? 'bg-accent' : 'bg-card'
        )}
        onClick={isConnected ? disconnectProxy : connectProxy}
      >
        <div
          className={cn(
            'absolute top-1 left-1 h-18 w-18 rounded-full bg-white shadow transition-transform duration-300',
            isConnected ? 'translate-x-19.5' : 'translate-x-0.5'
          )}
        />
      </Button>
    </div>
  );
};
