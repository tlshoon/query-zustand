import React from "react";
import { useQuery } from "react-query";
import { instance } from "../../../state/server/Base";
import { useDynamicStore } from "../../../state/client/store/dynamicStore";

const fetchPhoto = async (number) => {
  const res = await instance.get(`/api/users/${number}`);
  return res.data.data;
};

const DynamicPhoto = () => {
  const { number, setNumber } = useDynamicStore();
  const { data, isError, isLoading, isSuccess ,error} = useQuery(
    ["photo", number],
    () => fetchPhoto(number),
    {
      enabled: !!number,
    }
  );

  return (
    <form>
      <input
        type="number"
        placeholder="숫자를 입력하면 프로필을 가져옵니다."
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {isSuccess && data && (
        <div>
          <img src={data.avatar} alt={data.email} />
        </div>
      )}
    </form>
  );
};

export default DynamicPhoto;
