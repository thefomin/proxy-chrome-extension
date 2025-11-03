import {
  ConnectionControl,
  ConnectionLayout,
  ConnectionStatus,
} from "@/features/connection/ui";

const ConnectionPage = () => {
  return (
    <ConnectionLayout
      status={<ConnectionStatus />}
      control={<ConnectionControl />}
    />
  );
};

export const Component = ConnectionPage;
