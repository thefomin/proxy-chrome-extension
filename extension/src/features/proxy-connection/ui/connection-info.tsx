import { cn } from "@/shared/lib/css";
import { useProxyConnection } from "@/features/proxy-connection/model/proxy-connection-provider";
import { Button } from "@/shared/ui";
import { useState } from "react";

interface InfoRowProps {
  text: string;
  status: string;
}

export const ConnectionInfo = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { isConnected, proxy, isPending, errorMessage } = useProxyConnection();

  return (
    <div
      className={cn(
        "absolute bottom-30 h-min-[287px] w-full left-0 px-4 pb-16 bg-background/60 rounded-t-3xl shadow-lg transition-transform duration-500 ease-out z-0",
        isInfoOpen ? "translate-y-[5%]" : "translate-y-[78%]"
      )}
    >
      <Button
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className="bg-transparent h-8 hover:bg-transparent w-full"
      >
        {isInfoOpen ? "Скрыть" : "Подробнее"}
      </Button>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <InfoRow
            text="Статус"
            status={isConnected ? "Подключено" : "Отключено"}
          />
          {isPending ? (
            <InfoRow text="IP Сервера" status="Загрузка..." />
          ) : errorMessage ? (
            <InfoRow text="IP Сервера" status={`Ошибка: ${errorMessage}`} />
          ) : (
            <InfoRow text="IP Сервера" status={proxy?.ip || "не доступно"} />
          )}
          <InfoRow text="Премиум" status="Отсутствует" />
        </div>
        <Button className="h-8 rounded-2xl bg-green-800/50 text-green-400">
          Купить премиум
        </Button>
      </div>
    </div>
  );
};

const InfoRow = ({ text, status }: InfoRowProps) => {
  return (
    <div className="flex flex-row items-center justify-between border-t border-muted-foreground/60 py-4 text-sm font-medium">
      <div className="text-muted/70">{text}:</div>
      <div>{status}</div>
    </div>
  );
};
