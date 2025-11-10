import { useProxyConnection } from "@/features/proxy-connection/model/proxy-connection-provider";
import { Button, FlagInfo } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

export const ConnectionControl = () => {
  const navigate = useNavigate();
  const {
    isConnected,
    connectProxy,
    disconnectProxy,
    proxy,
    isPending,
    errorMessage,
    proxyParamsId,
  } = useProxyConnection();

  const ProxyButton = () => (
    <>
      <Button
        className="w-full rounded-xl text-background bg-green-300"
        onClick={isConnected ? disconnectProxy : connectProxy}
      >
        {isConnected ? "Отключиться" : "Подключиться"}
      </Button>
    </>
  );

  const handleOpenList = () => {
    navigate({
      pathname: "/proxy-list",
      search: `?proxyId=${proxyParamsId}`,
    });
  };

  return (
    <div className="absolute bottom-0 w-full bg-background rounded-3xl p-5 flex flex-col gap-6 z-10 transition-all duration-500">
      {isPending ? (
        <FlagInfo country="Загрузка..." tag="" city="Москва" />
      ) : errorMessage ? (
        <FlagInfo country={errorMessage} tag="" city={errorMessage} />
      ) : (
        <FlagInfo
          country={proxy?.geolocation?.country || ""}
          tag={proxy?.geolocation?.tag || ""}
          city={proxy?.geolocation?.city || ""}
        />
      )}
      <div className="flex flex-row gap-3">
        <ProxyButton />
        <Button
          className="w-12 rounded-xl bg-green-800/30 hover:border"
          onClick={handleOpenList}
        ></Button>
      </div>
    </div>
  );
};
