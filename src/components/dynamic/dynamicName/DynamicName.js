import React from "react";
import { useQuery } from "react-query";
import { instance } from "../../../state/server/Base";
import { useDynamicStore } from "../../../state/client/store/dynamicStore";

const fetchName = async (num) => {
  const res = await instance.get(`/api/resource?page=${num}`);
  return res.data.data;
};

const DynamicName = () => {
  const { num, setNum } = useDynamicStore();
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ["name", num],
    () => fetchName(num),
    { enabled: !!num }
  );

  return (
    <>
      <form>
        <input
          type="number"
          value={num}
          placeholder="숫자를 입력하면 이름을 가져옵니다."
          onChange={(e) => setNum(e.target.value)}
        />
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {isSuccess && data.map((data) => <div key={data.id}>{data.name}</div>)}
    </>
  );
};

export default DynamicName;
