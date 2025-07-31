import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const ConfigContext = createContext();

export const ConfigContextProvider = ({ children }) => {
  const hostname = window.location.hostname;
  const [appConfig, setAppConfig] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["appConfig"],
    queryFn: async () => {
      const res = await makeRequest.post("/config/appData/", {
        host_name: hostname,
      });
      return res.data; // Make sure to return res.data if using Axios
    },
  });

  // Set app config once data is fetched
  useEffect(() => {
    if (data) {
      setAppConfig(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-dvh
      text-xl md:text-2xl animate-pulse uppercase font-bold
       text-[#0560D9]"
      >
        Loading ...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: "1.1rem",
        }}
      >
        Error loading config: {error.message}
      </div>
    );
  }

  return (
    <ConfigContext.Provider value={{ appConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
