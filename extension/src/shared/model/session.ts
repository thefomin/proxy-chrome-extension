import { useState } from "react";

const useSession = () => {
  const [session, setSession] = useState(true);
  return {
    session,
    setSession,
  };
};

export { useSession };
