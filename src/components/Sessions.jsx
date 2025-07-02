import SessionBar from "./Static/SessionBar";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import { useParams } from "react-router-dom";

const Sessions = () => {
  const { id: doctor_id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["sessionList"],
    queryFn: async () => {
      const res = await makeRequest.get(
        `/doctors/sessions?doctor_id=${doctor_id}`
      );
      return res;
    },
  });

  return (
    <div className="flex flex-col gap-4">
      {isLoading && !data ? (
        <div></div>
      ) : error ? (
        error
      ) : (
        data &&
        data.data.map((item, index) => (
          <SessionBar key={index} session_data={item} />
        ))
      )}
    </div>
  );
};

export default Sessions;
