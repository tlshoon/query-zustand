import React, { useState } from "react";
import { useQuery } from "react-query";
import { instance } from "../../state/server/Base";

const fetchEmail = async () => {
  const res = await instance.get("/api/users?page=2");
  return res.data.data;
};

const Email = () => {
  const [fetch, setFetch] = useState(false);

  const { data, isLoading, isError } = useQuery("email", fetchEmail, {
    enabled: fetch,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
    <button onClick={() => setFetch(true)}>데이터 가져오기!</button>
      <ul>{data && data.map((data) => <li key={data.id}>{data.email}</li>)}</ul>
    </>
  );
};

export default Email;
