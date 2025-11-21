import { usePersistRoute } from '@/shared/model/use-persist-route';
import { Outlet } from 'react-router-dom';

export default function App() {
  usePersistRoute();
  return (
    <main className="w-max-[360px] h-screen">
      <Outlet />
    </main>
  );
}
