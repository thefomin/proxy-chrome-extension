import {
  ConnectionControl,
  ConnectionLayout,
  ConnectionInfo,
} from "@/features/proxy-connection/ui";

const ConnectionPage = () => {
  return (
    <ConnectionLayout
      status={<ConnectionInfo />}
      control={<ConnectionControl />}
    />
  );
};

export const Component = ConnectionPage;
