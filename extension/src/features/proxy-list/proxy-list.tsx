import { useProxy } from "./use-proxy";
import { Button, FlagInfo } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { useProxyConnection } from "../proxy-connection/model/proxy-connection-provider";

export const ProxyList = () => {
  const { proxy } = useProxy();
  const { proxyParamsId, setProxyParamsId } = useProxyConnection();
  const navigate = useNavigate();

  const handleSelectProxy = (id: string) => {
    setProxyParamsId(id);
  };

  const hadleToBack = () => {
    navigate({
      pathname: "/",
      search: `?proxyId=${proxyParamsId}`,
    });
  };
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="flex flex-row gap-4 justify-start px-4 py-2 items-center">
        <Button
          className="bg-transparent hover:bg-transparent text-3xl"
          onClick={hadleToBack}
        >
          {"<"}
        </Button>
        <h1 className="text-3xl font-medium">Локации</h1>
      </div>
      <h2 className="text-sm font-medium p-4">Бесплатные регионы</h2>
      <div className="w-full gap- flex flex-col ">
        {proxy?.map((p) => (
          <div
            key={p.id}
            onClick={() => handleSelectProxy(p.id)}
            className="flex items-center cursor-pointer hover:bg-muted/10 px-4 py-2 gap-2 "
          >
            {proxyParamsId === p.id && (
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2 transition-all duration-500" />
            )}
            <FlagInfo
              country={p.geolocation.country || ""}
              tag={p.geolocation.tag || ""}
              city={p.geolocation.city || ""}
              className="transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
