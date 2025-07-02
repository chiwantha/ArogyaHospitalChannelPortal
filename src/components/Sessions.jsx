import SessionBar from "./Static/SessionBar";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import Skeleton from "./Static/Skeliton";

const Sessions = ({ doctor_id }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sessionList"],
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/sessions?doctor_id=${doctor_id}`
      );
      return res;
    },
    enabled: !!doctor_id,
  });

  return (
    <div className="flex flex-col gap-4">
      {isLoading && !data
        ? [1, 2].map((item) => <Skeleton skfor="SessionBar" key={item} />)
        : error
        ? error
        : data &&
          data.data.map((item, index) => (
            <SessionBar key={index} session_data={item} />
          ))}
    </div>
  );
};

export default Sessions;
