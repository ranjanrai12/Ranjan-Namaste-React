import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineFn = () => {
      setIsOnline(true);
    };
    const offlineFn = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", onlineFn);
    window.addEventListener("offline", offlineFn);

    return () => {
      window.removeEventListener("online", onlineFn);
      window.removeEventListener("offline", offlineFn);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
