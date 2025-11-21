import {
  ConnectionLayout,
  ConnectionSwitcher,
  ConnectionControl,
} from '@/features/proxy-connection/ui';
import { Header } from '@/shared/ui';

const ConnectionPage = () => {
  return (
    <ConnectionLayout
      tab={<Header title="Подключение" />}
      switcher={<ConnectionSwitcher />}
      connection={<ConnectionControl />}
    />
  );
};

export const Component = ConnectionPage;
